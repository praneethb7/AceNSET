import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // import Button

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  buttonText?: string;
  buttonLink?: string;
}

const StatsCard = ({ title, value, subtitle, icon, trend, buttonText, buttonLink }: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="rounded-full bg-secondary p-1.5">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
        {trend && (
          <div className="flex items-center mt-2">
            <span className="text-xs text-muted-foreground ml-1">from last month</span>
          </div>
        )}
        {buttonText && buttonLink && (
          <div className="mt-4">
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">{buttonText}</Button>
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
