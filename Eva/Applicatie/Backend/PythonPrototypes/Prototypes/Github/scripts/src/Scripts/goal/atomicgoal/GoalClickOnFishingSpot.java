package scripts.goal.atomicgoal;

import org.powerbot.script.rt4.ClientContext;
import org.powerbot.script.rt4.Constants;
import scripts.core.data.NpcData;
import scripts.core.data.StatsData;
import scripts.core.domain.NPC;
import scripts.core.domain.Player;
import scripts.core.selector.NpcSelector;

import java.util.ArrayList;
import java.util.Collections;

public class GoalClickOnFishingSpot extends AtomicGoal {
    private String[] fishingSpot;
    private Player player = new Player(ctx, "its you but in code!:)");
    private NpcSelector npcSelector = new NpcSelector(ctx);
    private NPC npc = new NPC(ctx);
    private int[] bound = {-32, 48, 2, 0, -37, 44};

    public GoalClickOnFishingSpot(ClientContext arg0, String[] fishingSpot) {
        super(arg0);
        this.fishingSpot = fishingSpot;
    }

    @Override
    protected void init() {
        if (setup) {
            activateTimer.setPeriodBetween(8000, 10000);
            npcSelector.select().within(30).name(fishingSpot[1]).shuffle();
            ArrayList<String> actionList = new ArrayList<>();
            Collections.addAll(actionList, NpcSelector.peek().actions());
            boolean selectUsingAction = true;
            for (String action : actionList) {
                if(action==null){
                    continue;
                }
                System.out.println(action);
                if (action.contains(fishingSpot[0])) {
                    selectUsingAction=false;
                }
            }
            if(selectUsingAction){
                System.out.println("using action");
                npcSelector.select().within(30).action(fishingSpot[0]).shuffle();
            }
            setup = false;
            NpcData.setBounds(bound);
            goal = "fish" + System.currentTimeMillis() / 1000;
            StatsData.addSkill(Constants.SKILLS_FISHING);
        }
    }

    public void activate() {
        if (!madeAttempt) {
            if (npc.interact(fishingSpot[0])) {
                madeAttempt = true;
                executeTimer.setPeriodBetween(5000, 10000);
            }
        }
    }

    public boolean goalReached() {
        return !player.isDoingNothing();
    }

    public boolean isStuck() {
        if (!player.isDoingNothing()) {
            return false;
        }
        if (madeAttempt) {
            return executeTimer.isTime();
        }
        return activateTimer.isTime();
    }
}
