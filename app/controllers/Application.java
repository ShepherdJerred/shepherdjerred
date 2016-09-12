package controllers;

import play.*;
import play.data.DynamicForm;
import play.data.Form;
import play.mvc.*;

import views.html.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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

        MailerClient mailerClient;
        DynamicForm form = Form.form().bindFromRequest();

        Email email = new Email()
                .setSubject("Form submission from portfolio site")
                .setFrom(form.get("email"))
                .addTo("shepherdjerred@gmail.com")
                .setBodyText(form.get("message"));

        mailerClient.send(email);

        return ok(index.render());

    }

}
