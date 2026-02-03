import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface Bank {
  id: string;
  name: string;
  code: string;
  logo_url: string | null;
  is_active: boolean | null;
}

export const useBanks = () => {
  return useQuery({
    queryKey: ['banks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('banks')
        .select('id, name, code, logo_url, is_active')
        .eq('is_active', true)
        .order('name');
      
      if (error) throw error;
      return data as Bank[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
