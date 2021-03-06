package scripts.planner;

import org.powerbot.script.rt4.ClientAccessor;
import org.powerbot.script.rt4.ClientContext;
import scripts.goal.IGoal;

import java.util.Stack;

public abstract class Planner extends ClientAccessor {
    protected IGoal iGoal;

    public Planner(ClientContext arg0) {
        super(arg0);
    }

    public void replan() {
        chooseMethod();
    }

    public IGoal plan() {
        chooseMethod();
        return iGoal;
    }

    abstract void chooseMethod();

    public IGoal getHighLevelGoal() {
        return iGoal;
    }

    public Stack<IGoal> getSubGoals() {
        return iGoal.getSubGoals();
    }
}
