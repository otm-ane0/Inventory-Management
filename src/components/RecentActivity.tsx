
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { mockActivityEvents } from "@/data/mockData";

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {mockActivityEvents.map((activity, index) => (
        <div key={index} className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-muted">
              {activity.user.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user}</span>{" "}
              <span>{activity.action}</span>
              <span className="font-medium"> {activity.item}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
