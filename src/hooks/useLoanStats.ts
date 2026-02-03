import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface LoanAnalytics {
  loan_type: string;
  total_applications: number;
  total_disbursed: number;
  total_disbursed_amount: number;
  total_applied_amount: number;
  avg_disbursed_amount: number;
  disbursal_rate: number;
  total_pending: number;
  total_rejected: number;
  repeat_customers_count: number;
}

interface LocationStats {
  location: string;
  application_count: number;
}

export const useLoanAnalytics = () => {
  return useQuery({
    queryKey: ['loan-analytics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('loan_application_analytics')
        .select('*');
      
      if (error) throw error;
      return data as LoanAnalytics[];
    },
    refetchInterval: 30000, // Refresh every 30 seconds
  });
};

export const useLocationStats = () => {
  return useQuery({
    queryKey: ['location-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('loan_location_stats')
        .select('*')
        .order('application_count', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data as LocationStats[];
    },
    refetchInterval: 30000,
  });
};

export const useAggregatedStats = () => {
  const { data: analytics, isLoading } = useLoanAnalytics();
  
  const aggregated = analytics?.reduce(
    (acc, item) => ({
      totalApplications: acc.totalApplications + (item.total_applications || 0),
      totalDisbursed: acc.totalDisbursed + (item.total_disbursed || 0),
      totalDisbursedAmount: acc.totalDisbursedAmount + (item.total_disbursed_amount || 0),
      totalAppliedAmount: acc.totalAppliedAmount + (item.total_applied_amount || 0),
    }),
    { totalApplications: 0, totalDisbursed: 0, totalDisbursedAmount: 0, totalAppliedAmount: 0 }
  );

  return { data: aggregated, isLoading };
};
