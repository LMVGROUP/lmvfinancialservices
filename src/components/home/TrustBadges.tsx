import { Award, Users, Clock, Target } from 'lucide-react';

const badges = [
  {
    icon: Award,
    title: 'AMFI Registered',
    description: 'Authorized Mutual Fund Distributor',
  },
  {
    icon: Users,
    title: 'IRDAI Licensed',
    description: 'Insurance Regulatory Authority',
  },
  {
    icon: Clock,
    title: 'Quick Processing',
    description: '48 Hour Loan Approval',
  },
  {
    icon: Target,
    title: 'Goal-Based Planning',
    description: 'Customized Solutions',
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="container-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base">{badge.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
