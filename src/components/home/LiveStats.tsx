import { useLoanAnalytics, useLocationStats, useAggregatedStats } from '@/hooks/useLoanStats';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { FileText, CheckCircle, IndianRupee, MapPin, TrendingUp, Users } from 'lucide-react';

const formatCurrency = (amount: number) => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Cr`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} L`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
};

const LiveStats = () => {
  const { data: analytics, isLoading: analyticsLoading } = useLoanAnalytics();
  const { data: locations, isLoading: locationsLoading } = useLocationStats();
  const { data: aggregated, isLoading: aggregatedLoading } = useAggregatedStats();

  const isLoading = analyticsLoading || aggregatedLoading;

  const stats = [
    {
      icon: FileText,
      label: 'Total Applications',
      value: aggregated?.totalApplications || 0,
      format: (v: number) => v.toLocaleString('en-IN'),
    },
    {
      icon: CheckCircle,
      label: 'Loans Disbursed',
      value: aggregated?.totalDisbursed || 0,
      format: (v: number) => v.toLocaleString('en-IN'),
    },
    {
      icon: IndianRupee,
      label: 'Total Disbursements',
      value: aggregated?.totalDisbursedAmount || 0,
      format: formatCurrency,
    },
    {
      icon: TrendingUp,
      label: 'Applied Amount',
      value: aggregated?.totalAppliedAmount || 0,
      format: formatCurrency,
    },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-section">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live Statistics
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Real-time data from our loan management system
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 mx-auto">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                {isLoading ? (
                  <Skeleton className="h-8 w-24 mx-auto mb-1 bg-white/20" />
                ) : (
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.format(stat.value)}
                  </p>
                )}
                <p className="text-sm text-white/70">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loan Type Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Loans by Type
              </h3>
              {analyticsLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-10 bg-white/20" />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {analytics?.map((item) => (
                    <div key={item.loan_type} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <span className="text-white/90 font-medium">{item.loan_type}</span>
                      <div className="text-right">
                        <span className="text-white font-semibold">{item.total_disbursed}</span>
                        <span className="text-white/60 text-sm ml-1">/ {item.total_applications}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Top Locations
              </h3>
              {locationsLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-8 bg-white/20" />
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {locations?.slice(0, 6).map((loc, idx) => (
                    <div key={loc.location} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                          {idx + 1}
                        </span>
                        <span className="text-white/90 capitalize">{loc.location?.toLowerCase()}</span>
                      </div>
                      <span className="text-white font-semibold">{loc.application_count}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
