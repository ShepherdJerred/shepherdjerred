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

        String API_KEY = System.getenv("SPARKPOST_API_KEY");
        Client client = new Client(API_KEY);

        String email = form.get("email");
        String name = form.get("name");
        String message = form.get("message");

        if (email == null || email.isEmpty()) {
            flash("email", "The email field cannot be empty");
        } else if (name == null || name.isEmpty()) {
            flash("email", "The name field cannot be empty");
        } else if (message == null || message.isEmpty()) {
            flash("email", "The message field cannot be empty");
        }

        if (!EmailValidator.getInstance().isValid(email)) {
            flash("email", "Email address is invalid, please try again");
        }

        try {
            client.sendMessage(
                    "contact@shepherdjerred.com",
                    "shepherdjerred@gmail.com",
                    "Contact submission",
                    "From: " + email + " (" + name + ") " + " Message: " + message,
                    "<html>" + "From: " + email + " (" + name + ")" + "<br>Message: " + message +  "</html>");
            flash("email", "Your message has been sent");
        } catch (SparkPostException e) {
            flash("email", "Error sending message! Try again later or email me directly at shepherdjerred@gmail.com");
            e.printStackTrace();
        }

        return redirect("/#contact");

    }

}
