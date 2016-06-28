package controllers;

import play.*;
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

}
