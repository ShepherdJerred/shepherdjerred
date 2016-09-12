package controllers;

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

        return ok(index.render());

    }

}
