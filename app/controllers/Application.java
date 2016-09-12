package controllers;

import com.sparkpost.Client;
import com.sparkpost.exception.SparkPostException;
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

        try {
            client.sendMessage(
                    "contact@shepherdjerred.com",
                    "shepherdjerred@gmail.com",
                    "Contact submission",
                    "From:" + form.get("email") + " (" + form.get("name") + ") " + " Message: " + form.get("message"),
                    "<html>" + "From: " + form.get("email") + "(" + form.get("name") + ")" + "<br> Message: " + form.get("message") +  "</html>");
            flash("email_sent", "true");
        } catch (SparkPostException e) {
            e.printStackTrace();
        }

        return redirect("/#contact");

    }

}
