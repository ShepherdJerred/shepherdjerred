package controllers;

import com.sparkpost.Client;
import com.sparkpost.exception.SparkPostException;
import org.apache.commons.validator.routines.EmailValidator;
import play.data.DynamicForm;
import play.data.Form;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

    public static Result about() {
        return ok(about.render());
    }

    public static Result portfolio() {
        return ok(portfolio.render());
    }

    public static Result sendEmail() {

        DynamicForm form = Form.form().bindFromRequest();

        String email = form.get("email");
        String name = form.get("name");
        String message = form.get("message");

        if (email == null || email.isEmpty())
            flash("emailError", "The email field cannot be empty");
        else if (name == null || name.isEmpty())
            flash("emailError", "The name field cannot be empty");
        else if (message == null || message.isEmpty())
            flash("emailError", "The message field cannot be empty");

        if (!EmailValidator.getInstance().isValid(email))
            flash("emailError", "Email address is invalid, please try again");

        if (!flash().containsKey("emailErorr")) {
            try {
                Client client = new Client(System.getenv("SPARKPOST_API_KEY"));

                client.sendMessage(
                        "contact@shepherdjerred.com",
                        "shepherdjerred@gmail.com",
                        "Contact submission",
                        "From: " + email + " (" + name + ") " + " Message: " + message,
                        "<html>" + "From: " + email + " (" + name + ")" + "<br>Message: " + message + "</html>");
                flash("emailSuccess", "Your message has been sent");
            } catch (SparkPostException e) {
                flash("emailError", "Error sending message! Try again later or email me directly at shepherdjerred@gmail.com");
                e.printStackTrace();
            }
        }

        return redirect("/#contact");

    }

}
