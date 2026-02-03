export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      agent_commissions: {
        Row: {
          agent_id: string
          bank: string
          commission_percentage: number
          created_at: string | null
          id: string
          is_active: boolean | null
          product_type: Database["public"]["Enums"]["product_type"]
          updated_at: string | null
          valid_from: string
          valid_to: string
        }
        Insert: {
          agent_id: string
          bank: string
          commission_percentage: number
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          product_type: Database["public"]["Enums"]["product_type"]
          updated_at?: string | null
          valid_from: string
          valid_to: string
        }
        Update: {
          agent_id?: string
          bank?: string
          commission_percentage?: number
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          product_type?: Database["public"]["Enums"]["product_type"]
          updated_at?: string | null
          valid_from?: string
          valid_to?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_commissions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agents: {
        Row: {
          aadhar_card_document_url: string | null
          aadhar_card_number: string | null
          address: string | null
          agent_agreement: boolean | null
          agent_agreement_document_url: string | null
          agent_code: string
          agent_contact_number: string | null
          agent_email_id: string | null
          agent_name: string
          assigned_products: string[] | null
          auth_user_id: string | null
          bank_account_number: string | null
          bank_branch: string | null
          bank_cancelled_cheque_url: string | null
          bank_ifsc_code: string | null
          bank_name: string | null
          collaborated_date: string | null
          created_at: string | null
          crm_agent_code: string | null
          date_of_birth: string | null
          id: string
          is_active: boolean | null
          is_first_login: boolean | null
          pan_card_document_url: string | null
          pan_card_number: string | null
          referred_employee_code: string | null
          referred_employee_name: string | null
          remark: string | null
          reporting_manager_code: string | null
          reporting_manager_name: string | null
          reporting_to: number | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          aadhar_card_document_url?: string | null
          aadhar_card_number?: string | null
          address?: string | null
          agent_agreement?: boolean | null
          agent_agreement_document_url?: string | null
          agent_code: string
          agent_contact_number?: string | null
          agent_email_id?: string | null
          agent_name: string
          assigned_products?: string[] | null
          auth_user_id?: string | null
          bank_account_number?: string | null
          bank_branch?: string | null
          bank_cancelled_cheque_url?: string | null
          bank_ifsc_code?: string | null
          bank_name?: string | null
          collaborated_date?: string | null
          created_at?: string | null
          crm_agent_code?: string | null
          date_of_birth?: string | null
          id?: string
          is_active?: boolean | null
          is_first_login?: boolean | null
          pan_card_document_url?: string | null
          pan_card_number?: string | null
          referred_employee_code?: string | null
          referred_employee_name?: string | null
          remark?: string | null
          reporting_manager_code?: string | null
          reporting_manager_name?: string | null
          reporting_to?: number | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          aadhar_card_document_url?: string | null
          aadhar_card_number?: string | null
          address?: string | null
          agent_agreement?: boolean | null
          agent_agreement_document_url?: string | null
          agent_code?: string
          agent_contact_number?: string | null
          agent_email_id?: string | null
          agent_name?: string
          assigned_products?: string[] | null
          auth_user_id?: string | null
          bank_account_number?: string | null
          bank_branch?: string | null
          bank_cancelled_cheque_url?: string | null
          bank_ifsc_code?: string | null
          bank_name?: string | null
          collaborated_date?: string | null
          created_at?: string | null
          crm_agent_code?: string | null
          date_of_birth?: string | null
          id?: string
          is_active?: boolean | null
          is_first_login?: boolean | null
          pan_card_document_url?: string | null
          pan_card_number?: string | null
          referred_employee_code?: string | null
          referred_employee_name?: string | null
          remark?: string | null
          reporting_manager_code?: string | null
          reporting_manager_name?: string | null
          reporting_to?: number | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agents_reporting_to_fkey"
            columns: ["reporting_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance_records: {
        Row: {
          attendance_date: string
          check_in_location: Json | null
          check_in_selfie_url: string | null
          check_in_time: string | null
          check_in_validated: boolean | null
          check_out_location: Json | null
          check_out_selfie_url: string | null
          check_out_time: string | null
          check_out_validated: boolean | null
          created_at: string | null
          employee_id: number
          id: string
          remarks: string | null
          status: string | null
          total_hours: number | null
          updated_at: string | null
        }
        Insert: {
          attendance_date?: string
          check_in_location?: Json | null
          check_in_selfie_url?: string | null
          check_in_time?: string | null
          check_in_validated?: boolean | null
          check_out_location?: Json | null
          check_out_selfie_url?: string | null
          check_out_time?: string | null
          check_out_validated?: boolean | null
          created_at?: string | null
          employee_id: number
          id?: string
          remarks?: string | null
          status?: string | null
          total_hours?: number | null
          updated_at?: string | null
        }
        Update: {
          attendance_date?: string
          check_in_location?: Json | null
          check_in_selfie_url?: string | null
          check_in_time?: string | null
          check_in_validated?: boolean | null
          check_out_location?: Json | null
          check_out_selfie_url?: string | null
          check_out_time?: string | null
          check_out_validated?: boolean | null
          created_at?: string | null
          employee_id?: number
          id?: string
          remarks?: string | null
          status?: string | null
          total_hours?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attendance_records_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance_settings: {
        Row: {
          allowed_radius_meters: number | null
          check_in_end_time: string | null
          check_in_start_time: string | null
          check_out_start_time: string | null
          created_at: string | null
          grace_period_minutes: number | null
          id: string
          is_active: boolean | null
          office_location: Json
          office_name: string
          updated_at: string | null
          work_hours_required: number | null
        }
        Insert: {
          allowed_radius_meters?: number | null
          check_in_end_time?: string | null
          check_in_start_time?: string | null
          check_out_start_time?: string | null
          created_at?: string | null
          grace_period_minutes?: number | null
          id?: string
          is_active?: boolean | null
          office_location: Json
          office_name: string
          updated_at?: string | null
          work_hours_required?: number | null
        }
        Update: {
          allowed_radius_meters?: number | null
          check_in_end_time?: string | null
          check_in_start_time?: string | null
          check_out_start_time?: string | null
          created_at?: string | null
          grace_period_minutes?: number | null
          id?: string
          is_active?: boolean | null
          office_location?: Json
          office_name?: string
          updated_at?: string | null
          work_hours_required?: number | null
        }
        Relationships: []
      }
      bank_product_mapping: {
        Row: {
          bank_id: string
          created_at: string | null
          id: string
          is_active: boolean | null
          product_type: Database["public"]["Enums"]["product_type"]
          updated_at: string | null
        }
        Insert: {
          bank_id: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          product_type: Database["public"]["Enums"]["product_type"]
          updated_at?: string | null
        }
        Update: {
          bank_id?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          product_type?: Database["public"]["Enums"]["product_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_product_mapping_bank_id_fkey"
            columns: ["bank_id"]
            isOneToOne: false
            referencedRelation: "banks"
            referencedColumns: ["id"]
          },
        ]
      }
      banks: {
        Row: {
          base_url: string | null
          code: string
          created_at: string | null
          id: string
          is_active: boolean | null
          logo_url: string | null
          name: string
          param_agent_code: string | null
          param_dsa: string | null
          param_partner_name: string | null
          param_sm_name: string | null
          updated_at: string | null
        }
        Insert: {
          base_url?: string | null
          code: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name: string
          param_agent_code?: string | null
          param_dsa?: string | null
          param_partner_name?: string | null
          param_sm_name?: string | null
          updated_at?: string | null
        }
        Update: {
          base_url?: string | null
          code?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name?: string
          param_agent_code?: string | null
          param_dsa?: string | null
          param_partner_name?: string | null
          param_sm_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      branches: {
        Row: {
          code: string
          created_at: string | null
          id: string
          is_active: boolean | null
          location: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      business_loan_applications: {
        Row: {
          agent_id: string | null
          applicant_name: string
          applicant_phone: string | null
          application_date: string | null
          applied_loan_amount: number
          approved_loan_amount: number | null
          assigned_to: number | null
          bank: string | null
          category: string | null
          company_name: string | null
          created_at: string | null
          disbursed_loan_amount: number | null
          emi_start_date: string | null
          id: number
          loan_disbursed_date: string | null
          rate_of_interest: number | null
          reference_number: string | null
          remarks: string | null
          scheme: string
          state: string | null
          status: string | null
          sub_status: string | null
          tenure_in_months: number | null
          updated_at: string | null
        }
        Insert: {
          agent_id?: string | null
          applicant_name: string
          applicant_phone?: string | null
          application_date?: string | null
          applied_loan_amount: number
          approved_loan_amount?: number | null
          assigned_to?: number | null
          bank?: string | null
          category?: string | null
          company_name?: string | null
          created_at?: string | null
          disbursed_loan_amount?: number | null
          emi_start_date?: string | null
          id?: number
          loan_disbursed_date?: string | null
          rate_of_interest?: number | null
          reference_number?: string | null
          remarks?: string | null
          scheme: string
          state?: string | null
          status?: string | null
          sub_status?: string | null
          tenure_in_months?: number | null
          updated_at?: string | null
        }
        Update: {
          agent_id?: string | null
          applicant_name?: string
          applicant_phone?: string | null
          application_date?: string | null
          applied_loan_amount?: number
          approved_loan_amount?: number | null
          assigned_to?: number | null
          bank?: string | null
          category?: string | null
          company_name?: string | null
          created_at?: string | null
          disbursed_loan_amount?: number | null
          emi_start_date?: string | null
          id?: number
          loan_disbursed_date?: string | null
          rate_of_interest?: number | null
          reference_number?: string | null
          remarks?: string | null
          scheme?: string
          state?: string | null
          status?: string | null
          sub_status?: string | null
          tenure_in_months?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_loan_applications_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      commission_rates: {
        Row: {
          bank: string
          commission_percentage: number
          created_at: string | null
          id: number
          override_percentage: number | null
          product: Database["public"]["Enums"]["product_type"]
          updated_at: string | null
          valid_from: string
          valid_to: string
        }
        Insert: {
          bank: string
          commission_percentage: number
          created_at?: string | null
          id?: number
          override_percentage?: number | null
          product: Database["public"]["Enums"]["product_type"]
          updated_at?: string | null
          valid_from: string
          valid_to: string
        }
        Update: {
          bank?: string
          commission_percentage?: number
          created_at?: string | null
          id?: number
          override_percentage?: number | null
          product?: Database["public"]["Enums"]["product_type"]
          updated_at?: string | null
          valid_from?: string
          valid_to?: string
        }
        Relationships: []
      }
      commission_requests: {
        Row: {
          agent_id: string
          amount: number
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          description: string | null
          id: string
          payment_date: string | null
          rejection_reason: string | null
          request_date: string
          requested_for_month: string
          status: Database["public"]["Enums"]["commission_request_status"]
          updated_at: string | null
        }
        Insert: {
          agent_id: string
          amount: number
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          payment_date?: string | null
          rejection_reason?: string | null
          request_date?: string
          requested_for_month: string
          status?: Database["public"]["Enums"]["commission_request_status"]
          updated_at?: string | null
        }
        Update: {
          agent_id?: string
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          payment_date?: string | null
          rejection_reason?: string | null
          request_date?: string
          requested_for_month?: string
          status?: Database["public"]["Enums"]["commission_request_status"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_requests_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          created_at: string | null
          customer_code: string
          email: string | null
          first_seen_date: string | null
          id: string
          name: string
          phone: string
          total_loans: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          customer_code: string
          email?: string | null
          first_seen_date?: string | null
          id?: string
          name: string
          phone: string
          total_loans?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          customer_code?: string
          email?: string | null
          first_seen_date?: string | null
          id?: string
          name?: string
          phone?: string
          total_loans?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      employee_bank_codes: {
        Row: {
          agent_code: string | null
          bank_id: string
          created_at: string | null
          dsa_code: string | null
          employee_id: number
          id: string
          partner_name: string | null
          sm_name: string | null
          updated_at: string | null
        }
        Insert: {
          agent_code?: string | null
          bank_id: string
          created_at?: string | null
          dsa_code?: string | null
          employee_id: number
          id?: string
          partner_name?: string | null
          sm_name?: string | null
          updated_at?: string | null
        }
        Update: {
          agent_code?: string | null
          bank_id?: string
          created_at?: string | null
          dsa_code?: string | null
          employee_id?: number
          id?: string
          partner_name?: string | null
          sm_name?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_bank_codes_bank_id_fkey"
            columns: ["bank_id"]
            isOneToOne: false
            referencedRelation: "banks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_bank_codes_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_bonus_payouts: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          bonus_amount: number
          created_at: string | null
          employee_id: number
          id: number
          month: string
          reason: string | null
          updated_at: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          bonus_amount: number
          created_at?: string | null
          employee_id: number
          id?: number
          month: string
          reason?: string | null
          updated_at?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          bonus_amount?: number
          created_at?: string | null
          employee_id?: number
          id?: number
          month?: string
          reason?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_bonus_payouts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_target_conditions: {
        Row: {
          achievement_percentage: number | null
          bonus_amount: number | null
          bonus_multiplier: number | null
          bonus_target: number
          bonus_target_override: number | null
          business_achieved: number | null
          business_range_max: number | null
          business_range_min: number | null
          commission_cap_percentage: number | null
          created_at: string | null
          date_from: string | null
          date_to: string | null
          employee_id: number
          id: number
          is_active: boolean | null
          is_bonus_eligible: boolean | null
          lead_target: number | null
          leads_achieved: number | null
          login_target: number | null
          logins_achieved: number | null
          month: string
          monthly_target: number
          monthly_target_override: number | null
          product: Database["public"]["Enums"]["product_type"] | null
          quarterly_incentive_target: number | null
          salary_multiplier: number | null
          slab_data: Json | null
          updated_at: string | null
          version: number | null
        }
        Insert: {
          achievement_percentage?: number | null
          bonus_amount?: number | null
          bonus_multiplier?: number | null
          bonus_target: number
          bonus_target_override?: number | null
          business_achieved?: number | null
          business_range_max?: number | null
          business_range_min?: number | null
          commission_cap_percentage?: number | null
          created_at?: string | null
          date_from?: string | null
          date_to?: string | null
          employee_id: number
          id?: number
          is_active?: boolean | null
          is_bonus_eligible?: boolean | null
          lead_target?: number | null
          leads_achieved?: number | null
          login_target?: number | null
          logins_achieved?: number | null
          month: string
          monthly_target: number
          monthly_target_override?: number | null
          product?: Database["public"]["Enums"]["product_type"] | null
          quarterly_incentive_target?: number | null
          salary_multiplier?: number | null
          slab_data?: Json | null
          updated_at?: string | null
          version?: number | null
        }
        Update: {
          achievement_percentage?: number | null
          bonus_amount?: number | null
          bonus_multiplier?: number | null
          bonus_target?: number
          bonus_target_override?: number | null
          business_achieved?: number | null
          business_range_max?: number | null
          business_range_min?: number | null
          commission_cap_percentage?: number | null
          created_at?: string | null
          date_from?: string | null
          date_to?: string | null
          employee_id?: number
          id?: number
          is_active?: boolean | null
          is_bonus_eligible?: boolean | null
          lead_target?: number | null
          leads_achieved?: number | null
          login_target?: number | null
          logins_achieved?: number | null
          month?: string
          monthly_target?: number
          monthly_target_override?: number | null
          product?: Database["public"]["Enums"]["product_type"] | null
          quarterly_incentive_target?: number | null
          salary_multiplier?: number | null
          slab_data?: Json | null
          updated_at?: string | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_target_conditions_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          aadhar_number: string | null
          aadhar_pdf_url: string | null
          assigned_banks: string[] | null
          assigned_products: string[] | null
          auth_user_id: string | null
          cancelled_cheque_url: string | null
          created_at: string | null
          date_of_joining: string | null
          department: string | null
          designation: string | null
          email_id: string | null
          employee_code: string
          first_name: string
          id: number
          is_first_login: boolean | null
          last_name: string
          monthly_salary: number | null
          pan_number: string | null
          pan_pdf_url: string | null
          photo_url: string | null
          reporting_to: string | null
          role: string | null
          role_id: number | null
          salaried_bank_account_number: string | null
          salaried_bank_branch: string | null
          salaried_bank_ifsc_code: string | null
          salaried_bank_name: string | null
          salary_ctc: number | null
          status: string | null
          team_name: Database["public"]["Enums"]["team_name"] | null
          updated_at: string | null
        }
        Insert: {
          aadhar_number?: string | null
          aadhar_pdf_url?: string | null
          assigned_banks?: string[] | null
          assigned_products?: string[] | null
          auth_user_id?: string | null
          cancelled_cheque_url?: string | null
          created_at?: string | null
          date_of_joining?: string | null
          department?: string | null
          designation?: string | null
          email_id?: string | null
          employee_code: string
          first_name: string
          id?: number
          is_first_login?: boolean | null
          last_name: string
          monthly_salary?: number | null
          pan_number?: string | null
          pan_pdf_url?: string | null
          photo_url?: string | null
          reporting_to?: string | null
          role?: string | null
          role_id?: number | null
          salaried_bank_account_number?: string | null
          salaried_bank_branch?: string | null
          salaried_bank_ifsc_code?: string | null
          salaried_bank_name?: string | null
          salary_ctc?: number | null
          status?: string | null
          team_name?: Database["public"]["Enums"]["team_name"] | null
          updated_at?: string | null
        }
        Update: {
          aadhar_number?: string | null
          aadhar_pdf_url?: string | null
          assigned_banks?: string[] | null
          assigned_products?: string[] | null
          auth_user_id?: string | null
          cancelled_cheque_url?: string | null
          created_at?: string | null
          date_of_joining?: string | null
          department?: string | null
          designation?: string | null
          email_id?: string | null
          employee_code?: string
          first_name?: string
          id?: number
          is_first_login?: boolean | null
          last_name?: string
          monthly_salary?: number | null
          pan_number?: string | null
          pan_pdf_url?: string | null
          photo_url?: string | null
          reporting_to?: string | null
          role?: string | null
          role_id?: number | null
          salaried_bank_account_number?: string | null
          salaried_bank_branch?: string | null
          salaried_bank_ifsc_code?: string | null
          salaried_bank_name?: string | null
          salary_ctc?: number | null
          status?: string | null
          team_name?: Database["public"]["Enums"]["team_name"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_reporting_to_fkey"
            columns: ["reporting_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["employee_code"]
          },
        ]
      }
      home_loan_applications: {
        Row: {
          agent_id: string | null
          applicant_name: string
          applicant_phone: string | null
          application_date: string | null
          applied_loan_amount: number
          approved_loan_amount: number | null
          assigned_to: number | null
          bank: string | null
          bt_dis_date: string | null
          bt_disbursal: number | null
          category: string | null
          created_at: string | null
          disbursed_loan_amount: number | null
          emi_start_date: string | null
          id: number
          lan_number: string | null
          legal_assigned_name: string | null
          legal_date: string | null
          legal_mobile_number: string | null
          legal_stage: string | null
          loan_disbursed_date: string | null
          location: string | null
          login_status: string | null
          rate_of_interest: number | null
          remarks: string | null
          scheme: string
          state: string | null
          status: string | null
          sub_status: string | null
          technical_assigned_name: string | null
          technical_date: string | null
          technical_mobile_number: string | null
          technical_stage: string | null
          tenure_in_months: number | null
          top_dis_date: string | null
          top_disbursal: number | null
          updated_at: string | null
        }
        Insert: {
          agent_id?: string | null
          applicant_name: string
          applicant_phone?: string | null
          application_date?: string | null
          applied_loan_amount: number
          approved_loan_amount?: number | null
          assigned_to?: number | null
          bank?: string | null
          bt_dis_date?: string | null
          bt_disbursal?: number | null
          category?: string | null
          created_at?: string | null
          disbursed_loan_amount?: number | null
          emi_start_date?: string | null
          id?: number
          lan_number?: string | null
          legal_assigned_name?: string | null
          legal_date?: string | null
          legal_mobile_number?: string | null
          legal_stage?: string | null
          loan_disbursed_date?: string | null
          location?: string | null
          login_status?: string | null
          rate_of_interest?: number | null
          remarks?: string | null
          scheme: string
          state?: string | null
          status?: string | null
          sub_status?: string | null
          technical_assigned_name?: string | null
          technical_date?: string | null
          technical_mobile_number?: string | null
          technical_stage?: string | null
          tenure_in_months?: number | null
          top_dis_date?: string | null
          top_disbursal?: number | null
          updated_at?: string | null
        }
        Update: {
          agent_id?: string | null
          applicant_name?: string
          applicant_phone?: string | null
          application_date?: string | null
          applied_loan_amount?: number
          approved_loan_amount?: number | null
          assigned_to?: number | null
          bank?: string | null
          bt_dis_date?: string | null
          bt_disbursal?: number | null
          category?: string | null
          created_at?: string | null
          disbursed_loan_amount?: number | null
          emi_start_date?: string | null
          id?: number
          lan_number?: string | null
          legal_assigned_name?: string | null
          legal_date?: string | null
          legal_mobile_number?: string | null
          legal_stage?: string | null
          loan_disbursed_date?: string | null
          location?: string | null
          login_status?: string | null
          rate_of_interest?: number | null
          remarks?: string | null
          scheme?: string
          state?: string | null
          status?: string | null
          sub_status?: string | null
          technical_assigned_name?: string | null
          technical_date?: string | null
          technical_mobile_number?: string | null
          technical_stage?: string | null
          tenure_in_months?: number | null
          top_dis_date?: string | null
          top_disbursal?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "home_loan_applications_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      lap_loan_applications: {
        Row: {
          agent_id: string | null
          applicant_name: string
          applicant_phone: string | null
          application_date: string | null
          applied_loan_amount: number
          approved_loan_amount: number | null
          assigned_to: number | null
          bank: string | null
          bt_dis_date: string | null
          bt_disbursal: number | null
          category: string | null
          created_at: string | null
          disbursed_loan_amount: number | null
          emi_start_date: string | null
          id: number
          lan_number: string | null
          legal_assigned_name: string | null
          legal_date: string | null
          legal_mobile_number: string | null
          legal_stage: string | null
          loan_disbursed_date: string | null
          location: string | null
          login_status: string | null
          rate_of_interest: number | null
          reference_number: string | null
          remarks: string | null
          scheme: string
          state: string | null
          status: string | null
          sub_status: string | null
          technical_assigned_name: string | null
          technical_date: string | null
          technical_mobile_number: string | null
          technical_stage: string | null
          tenure_in_months: number | null
          top_disbursal: number | null
          top_lap_dis_date: string | null
          updated_at: string | null
        }
        Insert: {
          agent_id?: string | null
          applicant_name: string
          applicant_phone?: string | null
          application_date?: string | null
          applied_loan_amount: number
          approved_loan_amount?: number | null
          assigned_to?: number | null
          bank?: string | null
          bt_dis_date?: string | null
          bt_disbursal?: number | null
          category?: string | null
          created_at?: string | null
          disbursed_loan_amount?: number | null
          emi_start_date?: string | null
          id?: number
          lan_number?: string | null
          legal_assigned_name?: string | null
          legal_date?: string | null
          legal_mobile_number?: string | null
          legal_stage?: string | null
          loan_disbursed_date?: string | null
          location?: string | null
          login_status?: string | null
          rate_of_interest?: number | null
          reference_number?: string | null
          remarks?: string | null
          scheme: string
          state?: string | null
          status?: string | null
          sub_status?: string | null
          technical_assigned_name?: string | null
          technical_date?: string | null
          technical_mobile_number?: string | null
          technical_stage?: string | null
          tenure_in_months?: number | null
          top_disbursal?: number | null
          top_lap_dis_date?: string | null
          updated_at?: string | null
        }
        Update: {
          agent_id?: string | null
          applicant_name?: string
          applicant_phone?: string | null
          application_date?: string | null
          applied_loan_amount?: number
          approved_loan_amount?: number | null
          assigned_to?: number | null
          bank?: string | null
          bt_dis_date?: string | null
          bt_disbursal?: number | null
          category?: string | null
          created_at?: string | null
          disbursed_loan_amount?: number | null
          emi_start_date?: string | null
          id?: number
          lan_number?: string | null
          legal_assigned_name?: string | null
          legal_date?: string | null
          legal_mobile_number?: string | null
          legal_stage?: string | null
          loan_disbursed_date?: string | null
          location?: string | null
          login_status?: string | null
          rate_of_interest?: number | null
          reference_number?: string | null
          remarks?: string | null
          scheme?: string
          state?: string | null
          status?: string | null
          sub_status?: string | null
          technical_assigned_name?: string | null
          technical_date?: string | null
          technical_mobile_number?: string | null
          technical_stage?: string | null
          tenure_in_months?: number | null
          top_disbursal?: number | null
          top_lap_dis_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lap_loan_applications_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_assignment_requests: {
        Row: {
          created_at: string | null
          current_assigned_to: number | null
          id: string
          lead_id: number
          reason: string | null
          rejection_reason: string | null
          requested_assigned_to: number
          requested_at: string
          requested_by: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_assigned_to?: number | null
          id?: string
          lead_id: number
          reason?: string | null
          rejection_reason?: string | null
          requested_assigned_to: number
          requested_at?: string
          requested_by: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_assigned_to?: number | null
          id?: string
          lead_id?: number
          reason?: string | null
          rejection_reason?: string | null
          requested_assigned_to?: number
          requested_at?: string
          requested_by?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_assignment_requests_current_assigned_to_fkey"
            columns: ["current_assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_assignment_requests_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_assignment_requests_requested_assigned_to_fkey"
            columns: ["requested_assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: number | null
          bank: string | null
          category: string | null
          company: string | null
          contacted_date: string | null
          converted_to_loan_id: number | null
          converted_to_loan_type: string | null
          created_at: string | null
          created_by: string | null
          customer_id: string | null
          follow_up_date: string | null
          id: number
          la: number | null
          lead_source: string | null
          location: string | null
          mobile: string
          name: string
          remarks: string | null
          salary: number | null
          scheme: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: number | null
          bank?: string | null
          category?: string | null
          company?: string | null
          contacted_date?: string | null
          converted_to_loan_id?: number | null
          converted_to_loan_type?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_id?: string | null
          follow_up_date?: string | null
          id?: number
          la?: number | null
          lead_source?: string | null
          location?: string | null
          mobile: string
          name: string
          remarks?: string | null
          salary?: number | null
          scheme?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: number | null
          bank?: string | null
          category?: string | null
          company?: string | null
          contacted_date?: string | null
          converted_to_loan_id?: number | null
          converted_to_loan_type?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_id?: string | null
          follow_up_date?: string | null
          id?: number
          la?: number | null
          lead_source?: string | null
          location?: string | null
          mobile?: string
          name?: string
          remarks?: string | null
          salary?: number | null
          scheme?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      loan_application_audit_log: {
        Row: {
          action: string
          changed_at: string
          changed_by: string | null
          changed_by_name: string | null
          changed_fields: string[] | null
          created_at: string
          id: string
          loan_id: number
          loan_type: string
          new_values: Json | null
          old_values: Json | null
        }
        Insert: {
          action: string
          changed_at?: string
          changed_by?: string | null
          changed_by_name?: string | null
          changed_fields?: string[] | null
          created_at?: string
          id?: string
          loan_id: number
          loan_type: string
          new_values?: Json | null
          old_values?: Json | null
        }
        Update: {
          action?: string
          changed_at?: string
          changed_by?: string | null
          changed_by_name?: string | null
          changed_fields?: string[] | null
          created_at?: string
          id?: string
          loan_id?: number
          loan_type?: string
          new_values?: Json | null
          old_values?: Json | null
        }
        Relationships: []
      }
      loan_assignment_requests: {
        Row: {
          created_at: string | null
          current_assigned_to: number | null
          id: string
          loan_id: number
          loan_type: string
          reason: string | null
          rejection_reason: string | null
          requested_assigned_to: number
          requested_at: string | null
          requested_by: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_assigned_to?: number | null
          id?: string
          loan_id: number
          loan_type: string
          reason?: string | null
          rejection_reason?: string | null
          requested_assigned_to: number
          requested_at?: string | null
          requested_by: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_assigned_to?: number | null
          id?: string
          loan_id?: number
          loan_type?: string
          reason?: string | null
          rejection_reason?: string | null
          requested_assigned_to?: number
          requested_at?: string | null
          requested_by?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "loan_assignment_requests_current_assigned_to_fkey"
            columns: ["current_assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loan_assignment_requests_requested_assigned_to_fkey"
            columns: ["requested_assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      module_table_mapping: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          module_name: string
          table_name: string
          table_schema: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          module_name: string
          table_name: string
          table_schema?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          module_name?: string
          table_name?: string
          table_schema?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      notification_preferences: {
        Row: {
          created_at: string | null
          enable_browser_notifications: boolean | null
          enable_disbursement: boolean | null
          enable_loan_application: boolean | null
          enable_payment_approval: boolean | null
          enable_payment_processed: boolean | null
          enable_revenue_update: boolean | null
          enable_sound: boolean | null
          enable_status_change: boolean | null
          enable_toast: boolean | null
          id: string
          quiet_hours_enabled: boolean | null
          quiet_hours_end: string | null
          quiet_hours_start: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          enable_browser_notifications?: boolean | null
          enable_disbursement?: boolean | null
          enable_loan_application?: boolean | null
          enable_payment_approval?: boolean | null
          enable_payment_processed?: boolean | null
          enable_revenue_update?: boolean | null
          enable_sound?: boolean | null
          enable_status_change?: boolean | null
          enable_toast?: boolean | null
          id?: string
          quiet_hours_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          enable_browser_notifications?: boolean | null
          enable_disbursement?: boolean | null
          enable_loan_application?: boolean | null
          enable_payment_approval?: boolean | null
          enable_payment_processed?: boolean | null
          enable_revenue_update?: boolean | null
          enable_sound?: boolean | null
          enable_status_change?: boolean | null
          enable_toast?: boolean | null
          id?: string
          quiet_hours_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          redirect_url: string | null
          reference_id: number | null
          reference_table: string | null
          title: string
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          redirect_url?: string | null
          reference_id?: number | null
          reference_table?: string | null
          title: string
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          redirect_url?: string | null
          reference_id?: number | null
          reference_table?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      payment_approval_audit: {
        Row: {
          action: string
          approval_id: string
          comments: string | null
          created_at: string | null
          id: string
          new_status: string | null
          old_status: string | null
          performed_at: string
          performed_by: string
        }
        Insert: {
          action: string
          approval_id: string
          comments?: string | null
          created_at?: string | null
          id?: string
          new_status?: string | null
          old_status?: string | null
          performed_at?: string
          performed_by: string
        }
        Update: {
          action?: string
          approval_id?: string
          comments?: string | null
          created_at?: string | null
          id?: string
          new_status?: string | null
          old_status?: string | null
          performed_at?: string
          performed_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_approval_audit_approval_id_fkey"
            columns: ["approval_id"]
            isOneToOne: false
            referencedRelation: "payment_approvals"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_approvals: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          initiated_at: string
          initiated_by: string
          md_approved_at: string | null
          md_approved_by: string | null
          md_comments: string | null
          payment_date: string | null
          payment_reference_id: number
          payment_type: string
          rejected_at: string | null
          rejected_by: string | null
          rejection_reason: string | null
          sales_manager_approved_at: string | null
          sales_manager_approved_by: string | null
          sales_manager_comments: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          initiated_at?: string
          initiated_by: string
          md_approved_at?: string | null
          md_approved_by?: string | null
          md_comments?: string | null
          payment_date?: string | null
          payment_reference_id: number
          payment_type: string
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          sales_manager_approved_at?: string | null
          sales_manager_approved_by?: string | null
          sales_manager_comments?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          initiated_at?: string
          initiated_by?: string
          md_approved_at?: string | null
          md_approved_by?: string | null
          md_comments?: string | null
          payment_date?: string | null
          payment_reference_id?: number
          payment_type?: string
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          sales_manager_approved_at?: string | null
          sales_manager_approved_by?: string | null
          sales_manager_comments?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      personal_loan_applications: {
        Row: {
          agent_id: string | null
          applicant_name: string
          applicant_phone: string | null
          application_date: string | null
          applied_loan_amount: number
          approved_loan_amount: number | null
          assigned_to: number | null
          bank: string | null
          category: string | null
          company_name: string | null
          created_at: string | null
          disbursed_loan_amount: number | null
          emi_start_date: string | null
          id: number
          loan_disbursed_date: string | null
          location: string | null
          net_salary: string | null
          rate_of_interest: number | null
          reference_number: string | null
          remarks: string | null
          salary_account: string | null
          scheme: string
          state: string | null
          status: string | null
          sub_status: string | null
          tenure_in_months: number | null
          updated_at: string | null
        }
        Insert: {
          agent_id?: string | null
          applicant_name: string
          applicant_phone?: string | null
          application_date?: string | null
          applied_loan_amount: number
          approved_loan_amount?: number | null
          assigned_to?: number | null
          bank?: string | null
          category?: string | null
          company_name?: string | null
          created_at?: string | null
          disbursed_loan_amount?: number | null
          emi_start_date?: string | null
          id?: number
          loan_disbursed_date?: string | null
          location?: string | null
          net_salary?: string | null
          rate_of_interest?: number | null
          reference_number?: string | null
          remarks?: string | null
          salary_account?: string | null
          scheme: string
          state?: string | null
          status?: string | null
          sub_status?: string | null
          tenure_in_months?: number | null
          updated_at?: string | null
        }
        Update: {
          agent_id?: string | null
          applicant_name?: string
          applicant_phone?: string | null
          application_date?: string | null
          applied_loan_amount?: number
          approved_loan_amount?: number | null
          assigned_to?: number | null
          bank?: string | null
          category?: string | null
          company_name?: string | null
          created_at?: string | null
          disbursed_loan_amount?: number | null
          emi_start_date?: string | null
          id?: number
          loan_disbursed_date?: string | null
          location?: string | null
          net_salary?: string | null
          rate_of_interest?: number | null
          reference_number?: string | null
          remarks?: string | null
          salary_account?: string | null
          scheme?: string
          state?: string | null
          status?: string | null
          sub_status?: string | null
          tenure_in_months?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "personal_loan_applications_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      product_scheme_mapping: {
        Row: {
          created_at: string | null
          id: number
          product: Database["public"]["Enums"]["product_type"]
          scheme: Database["public"]["Enums"]["scheme_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          product: Database["public"]["Enums"]["product_type"]
          scheme: Database["public"]["Enums"]["scheme_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          product?: Database["public"]["Enums"]["product_type"]
          scheme?: Database["public"]["Enums"]["scheme_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      quarterly_incentive_payouts: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          bl_factor: number | null
          bl_total: number | null
          created_at: string | null
          employee_id: number
          excess_over_target: number | null
          final_incentive_amount: number | null
          hl_factor: number | null
          hl_lap_bonus_deduction: number | null
          hl_lap_bonus_portion: number | null
          hl_lap_disbursement: number | null
          hl_total: number | null
          id: number
          incentive_amount: number
          incentive_tier_id: number | null
          is_primary_pl_bl: boolean | null
          lap_factor: number | null
          lap_total: number | null
          month1_bonus: number | null
          month1_disbursed: number | null
          month1_products: Json | null
          month1_target: number | null
          month2_bonus: number | null
          month2_disbursed: number | null
          month2_products: Json | null
          month2_target: number | null
          month3_bonus: number | null
          month3_disbursed: number | null
          month3_products: Json | null
          month3_target: number | null
          multiplier_achieved: number
          net_incentive_base: number | null
          pl_bl_bonus_multiplied: number | null
          pl_bl_bonus_portion: number | null
          pl_bl_disbursement: number | null
          pl_factor: number | null
          pl_total: number | null
          product_breakdown: Json | null
          quarter: string
          quarter_number: number
          raw_disbursed_amount: number | null
          remarks: string | null
          total_business: number
          total_salary_sum: number
          updated_at: string | null
          weighted_factor: number | null
          year: number
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          bl_factor?: number | null
          bl_total?: number | null
          created_at?: string | null
          employee_id: number
          excess_over_target?: number | null
          final_incentive_amount?: number | null
          hl_factor?: number | null
          hl_lap_bonus_deduction?: number | null
          hl_lap_bonus_portion?: number | null
          hl_lap_disbursement?: number | null
          hl_total?: number | null
          id?: number
          incentive_amount?: number
          incentive_tier_id?: number | null
          is_primary_pl_bl?: boolean | null
          lap_factor?: number | null
          lap_total?: number | null
          month1_bonus?: number | null
          month1_disbursed?: number | null
          month1_products?: Json | null
          month1_target?: number | null
          month2_bonus?: number | null
          month2_disbursed?: number | null
          month2_products?: Json | null
          month2_target?: number | null
          month3_bonus?: number | null
          month3_disbursed?: number | null
          month3_products?: Json | null
          month3_target?: number | null
          multiplier_achieved?: number
          net_incentive_base?: number | null
          pl_bl_bonus_multiplied?: number | null
          pl_bl_bonus_portion?: number | null
          pl_bl_disbursement?: number | null
          pl_factor?: number | null
          pl_total?: number | null
          product_breakdown?: Json | null
          quarter: string
          quarter_number: number
          raw_disbursed_amount?: number | null
          remarks?: string | null
          total_business?: number
          total_salary_sum?: number
          updated_at?: string | null
          weighted_factor?: number | null
          year: number
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          bl_factor?: number | null
          bl_total?: number | null
          created_at?: string | null
          employee_id?: number
          excess_over_target?: number | null
          final_incentive_amount?: number | null
          hl_factor?: number | null
          hl_lap_bonus_deduction?: number | null
          hl_lap_bonus_portion?: number | null
          hl_lap_disbursement?: number | null
          hl_total?: number | null
          id?: number
          incentive_amount?: number
          incentive_tier_id?: number | null
          is_primary_pl_bl?: boolean | null
          lap_factor?: number | null
          lap_total?: number | null
          month1_bonus?: number | null
          month1_disbursed?: number | null
          month1_products?: Json | null
          month1_target?: number | null
          month2_bonus?: number | null
          month2_disbursed?: number | null
          month2_products?: Json | null
          month2_target?: number | null
          month3_bonus?: number | null
          month3_disbursed?: number | null
          month3_products?: Json | null
          month3_target?: number | null
          multiplier_achieved?: number
          net_incentive_base?: number | null
          pl_bl_bonus_multiplied?: number | null
          pl_bl_bonus_portion?: number | null
          pl_bl_disbursement?: number | null
          pl_factor?: number | null
          pl_total?: number | null
          product_breakdown?: Json | null
          quarter?: string
          quarter_number?: number
          raw_disbursed_amount?: number | null
          remarks?: string | null
          total_business?: number
          total_salary_sum?: number
          updated_at?: string | null
          weighted_factor?: number | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "quarterly_incentive_payouts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quarterly_incentive_payouts_incentive_tier_id_fkey"
            columns: ["incentive_tier_id"]
            isOneToOne: false
            referencedRelation: "quarterly_incentive_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      quarterly_incentive_tiers: {
        Row: {
          created_at: string | null
          department: string
          id: number
          incentive_amount: number
          multiplication_factor: number | null
          multiplier_threshold: number
          product_type: Database["public"]["Enums"]["product_type"] | null
          updated_at: string | null
          valid_from: string
          valid_to: string
        }
        Insert: {
          created_at?: string | null
          department: string
          id?: number
          incentive_amount: number
          multiplication_factor?: number | null
          multiplier_threshold: number
          product_type?: Database["public"]["Enums"]["product_type"] | null
          updated_at?: string | null
          valid_from: string
          valid_to: string
        }
        Update: {
          created_at?: string | null
          department?: string
          id?: number
          incentive_amount?: number
          multiplication_factor?: number | null
          multiplier_threshold?: number
          product_type?: Database["public"]["Enums"]["product_type"] | null
          updated_at?: string | null
          valid_from?: string
          valid_to?: string
        }
        Relationships: []
      }
      rls_policy_sync_log: {
        Row: {
          completed_at: string | null
          error_message: string | null
          id: string
          policies_created: number | null
          policies_deleted: number | null
          policies_updated: number | null
          started_at: string | null
          status: string
          sync_type: string
          triggered_by: string | null
        }
        Insert: {
          completed_at?: string | null
          error_message?: string | null
          id?: string
          policies_created?: number | null
          policies_deleted?: number | null
          policies_updated?: number | null
          started_at?: string | null
          status: string
          sync_type: string
          triggered_by?: string | null
        }
        Update: {
          completed_at?: string | null
          error_message?: string | null
          id?: string
          policies_created?: number | null
          policies_deleted?: number | null
          policies_updated?: number | null
          started_at?: string | null
          status?: string
          sync_type?: string
          triggered_by?: string | null
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string | null
          department_code: Database["public"]["Enums"]["department_type"] | null
          description: string
          display_name: string
          id: string
          permission_level: number
        }
        Insert: {
          created_at?: string | null
          department_code?:
            | Database["public"]["Enums"]["department_type"]
            | null
          description: string
          display_name: string
          id?: string
          permission_level: number
        }
        Update: {
          created_at?: string | null
          department_code?:
            | Database["public"]["Enums"]["department_type"]
            | null
          description?: string
          display_name?: string
          id?: string
          permission_level?: number
        }
        Relationships: []
      }
      runo_call_logs: {
        Row: {
          call_start_time: string | null
          call_status: string | null
          call_tag: string | null
          call_type: string | null
          caller_name: string | null
          created_at: string
          customer_name: string | null
          duration_seconds: number | null
          id: string
          lead_id: number | null
          phone_number: string
          runo_call_id: string
          runo_caller_id: string | null
          runo_created_at: string | null
          runo_customer_id: string | null
          synced_at: string | null
          updated_at: string
        }
        Insert: {
          call_start_time?: string | null
          call_status?: string | null
          call_tag?: string | null
          call_type?: string | null
          caller_name?: string | null
          created_at?: string
          customer_name?: string | null
          duration_seconds?: number | null
          id?: string
          lead_id?: number | null
          phone_number: string
          runo_call_id: string
          runo_caller_id?: string | null
          runo_created_at?: string | null
          runo_customer_id?: string | null
          synced_at?: string | null
          updated_at?: string
        }
        Update: {
          call_start_time?: string | null
          call_status?: string | null
          call_tag?: string | null
          call_type?: string | null
          caller_name?: string | null
          created_at?: string
          customer_name?: string | null
          duration_seconds?: number | null
          id?: string
          lead_id?: number | null
          phone_number?: string
          runo_call_id?: string
          runo_caller_id?: string | null
          runo_created_at?: string | null
          runo_customer_id?: string | null
          synced_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "runo_call_logs_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      user_access: {
        Row: {
          can_approve: boolean | null
          can_edit: boolean | null
          can_view: boolean | null
          created_at: string | null
          employee_id: number | null
          id: string
          module_name: string
          role_id: number | null
          updated_at: string | null
        }
        Insert: {
          can_approve?: boolean | null
          can_edit?: boolean | null
          can_view?: boolean | null
          created_at?: string | null
          employee_id?: number | null
          id?: string
          module_name: string
          role_id?: number | null
          updated_at?: string | null
        }
        Update: {
          can_approve?: boolean | null
          can_edit?: boolean | null
          can_view?: boolean | null
          created_at?: string | null
          employee_id?: number | null
          id?: string
          module_name?: string
          role_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_access_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      user_access_audit_log: {
        Row: {
          action: string
          changed_at: string
          changed_by: string | null
          created_at: string | null
          id: string
          module_name: string
          new_permissions: Json | null
          old_permissions: Json | null
          target_id: number | null
          target_name: string | null
          target_type: string
        }
        Insert: {
          action: string
          changed_at?: string
          changed_by?: string | null
          created_at?: string | null
          id?: string
          module_name: string
          new_permissions?: Json | null
          old_permissions?: Json | null
          target_id?: number | null
          target_name?: string | null
          target_type: string
        }
        Update: {
          action?: string
          changed_at?: string
          changed_by?: string | null
          created_at?: string | null
          id?: string
          module_name?: string
          new_permissions?: Json | null
          old_permissions?: Json | null
          target_id?: number | null
          target_name?: string | null
          target_type?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          branch_id: string | null
          created_at: string | null
          department: Database["public"]["Enums"]["department_type"] | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          branch_id?: string | null
          created_at?: string | null
          department?: Database["public"]["Enums"]["department_type"] | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          branch_id?: string | null
          created_at?: string | null
          department?: Database["public"]["Enums"]["department_type"] | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      loan_application_analytics: {
        Row: {
          avg_disbursed_amount: number | null
          disbursal_rate: number | null
          loan_type: string | null
          repeat_customers_count: number | null
          total_applications: number | null
          total_applied_amount: number | null
          total_disbursed: number | null
          total_disbursed_amount: number | null
          total_pending: number | null
          total_rejected: number | null
        }
        Relationships: []
      }
      loan_location_stats: {
        Row: {
          application_count: number | null
          location: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      auto_generate_sales_targets: {
        Args: { target_month: string }
        Returns: undefined
      }
      calculate_business_achievements: {
        Args: { calculation_month: string }
        Returns: {
          achievement_percentage: number
          employee_id: number
          is_bonus_eligible: boolean
          total_business: number
        }[]
      }
      calculate_quarterly_incentives: {
        Args: { calculation_quarter: number; calculation_year: number }
        Returns: {
          employee_id: number
          incentive_amount: number
          multiplication_factor: number
          total_bonus_amount: number
          total_disbursed_amount: number
          total_target_amount: number
        }[]
      }
      can_access_employee_data: {
        Args: { _employee_id: number; _user_auth_id: string }
        Returns: boolean
      }
      can_access_lead: {
        Args: { _lead_id: number; _user_id: string }
        Returns: boolean
      }
      can_access_product_loan: {
        Args: { _product_type: string; _user_auth_id: string }
        Returns: boolean
      }
      can_manage_access_permissions: {
        Args: { _user_id: string }
        Returns: boolean
      }
      can_modify_lead: { Args: { _user_id: string }; Returns: boolean }
      can_view_by_assignment: {
        Args: { _assigned_to: number }
        Returns: boolean
      }
      can_view_loan: { Args: { _agent_id: string }; Returns: boolean }
      check_assigned_to_unchanged: {
        Args: { _lead_id: number; _new_assigned_to: number }
        Returns: boolean
      }
      check_user_module_access: {
        Args: {
          _module_name: string
          _permission_type?: string
          _user_id: string
        }
        Returns: boolean
      }
      fetch_md_metrics: { Args: never; Returns: Json }
      fetch_role_metrics: {
        Args: { p_employee_id?: number; p_role: string }
        Returns: Json
      }
      fetch_role_metrics_monthly: {
        Args: { p_empid: number; p_role: string }
        Returns: Json
      }
      fetch_role_metrics_weekly: {
        Args: { p_empid: number; p_role: string }
        Returns: Json
      }
      fetch_sm_metrics: { Args: { p_employee_id: number }; Returns: Json }
      fetch_tl_metrics: { Args: { p_employee_id: number }; Returns: Json }
      filter_loans_by_employee_joining_date: {
        Args: { employee_id: number; loan_date: string }
        Returns: boolean
      }
      find_or_create_customer:
        | { Args: { p_name: string; p_phone: string }; Returns: string }
        | {
            Args: { p_email: string; p_name: string; p_phone: string }
            Returns: string
          }
      generate_customer_code: { Args: never; Returns: string }
      generate_dummy_password: { Args: never; Returns: string }
      generate_next_application_number: { Args: never; Returns: string }
      generate_next_business_loan_reference: { Args: never; Returns: string }
      generate_next_lap_reference: { Args: never; Returns: string }
      generate_next_personal_loan_reference: { Args: never; Returns: string }
      generate_next_reference_number: { Args: never; Returns: string }
      get_accessible_employee_ids: {
        Args: { _user_auth_id: string }
        Returns: {
          employee_id: number
        }[]
      }
      get_agent_id_for_user: { Args: { _user_id: string }; Returns: string }
      get_all_loans_by_team_lead: {
        Args: { manager_id: string }
        Returns: {
          applicant_name: string
          applicant_phone: string
          applied_loan_amount: number
          bank: string
          created_at: string
          first_name: string
          loan_type: string
          scheme: string
          status: string
        }[]
      }
      get_all_rls_status: {
        Args: never
        Returns: {
          module_name: string
          policy_count: number
          rls_enabled: boolean
          table_name: string
        }[]
      }
      get_all_subordinate_ids: {
        Args: { _manager_auth_id: string }
        Returns: {
          employee_id: number
        }[]
      }
      get_current_employee_id: {
        Args: { _user_auth_id: string }
        Returns: number
      }
      get_customer_loan_history: {
        Args: { p_customer_id: string }
        Returns: {
          applicant_name: string
          application_date: string
          applied_amount: number
          approved_amount: number
          bank: string
          disbursed_amount: number
          loan_disbursed_date: string
          loan_type: string
          scheme: string
          status: string
        }[]
      }
      get_employee_display_names: {
        Args: { _ids: number[] }
        Returns: {
          display_name: string
          id: number
        }[]
      }
      get_employee_id_for_auth_user: {
        Args: { auth_user_uuid: string }
        Returns: number
      }
      get_employee_targets_for_accessible: {
        Args: { _target_month: string; _user_auth_id: string }
        Returns: {
          bonus_target: number
          bonus_target_override: number
          employee_id: number
          employee_name: string
          monthly_target: number
          monthly_target_override: number
        }[]
      }
      get_recent_activities_by_lead: {
        Args: { p_assigned_to: number }
        Returns: {
          applicant_name: string
          applicant_phone: string
          created_at: string
          loan_type: string
          status: string
        }[]
      }
      get_table_rls_policies: {
        Args: { _table_name: string }
        Returns: {
          check_expr: string
          command: string
          permissive: string
          policy_name: string
          roles: string[]
          using_expr: string
        }[]
      }
      get_total_loan_count: { Args: never; Returns: number }
      get_user_branches: {
        Args: { _user_id: string }
        Returns: {
          branch_id: string
        }[]
      }
      get_user_products: { Args: { _user_auth_id: string }; Returns: string[] }
      get_user_role: {
        Args: { user_uuid: string }
        Returns: {
          role: Database["public"]["Enums"]["app_role"]
        }[]
      }
      has_admin_access: { Args: { _user_id: string }; Returns: boolean }
      has_any_role: {
        Args: {
          _roles: Database["public"]["Enums"]["app_role"][]
          _user_id: string
        }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_agent: { Args: { _user_id: string }; Returns: boolean }
      is_manager_of: {
        Args: { _employee_id: string; _manager_id: string }
        Returns: boolean
      }
      sync_leads_scheme_from_loans: {
        Args: never
        Returns: {
          message: string
          updated_count: number
        }[]
      }
      update_business_achievements: {
        Args: { calculation_month: string }
        Returns: undefined
      }
      update_quarterly_incentive_payouts: {
        Args: { calculation_quarter: number; calculation_year: number }
        Returns: undefined
      }
    }
    Enums: {
      app_role:
        | "md_ceo"
        | "system_admin"
        | "human_resources"
        | "sales_manager"
        | "operations_manager"
        | "team_leader_tso"
        | "telecaller_tso"
        | "backend_executive"
        | "agent"
        | "finance_admin"
        | "finance_officer"
      commission_request_status: "pending" | "approved" | "rejected" | "paid"
      department_type:
        | "Head Officer"
        | "Admin"
        | "Sales"
        | "Operations"
        | "Finance"
        | "Administration"
        | "Management"
      legal_stage_status: "GIVEN" | "YES" | "RECEIVED"
      product_type:
        | "Personal Loan"
        | "Home Loan"
        | "Business Loan"
        | "LAP Loan"
        | "Car Loan"
        | "Education Loan"
      scheme_type:
        | "Fresh"
        | "Parallel"
        | "Top-up"
        | "BT"
        | "CC BT"
        | "CC BT + Topup"
        | "BT + Topup"
      team_name: "Alpha" | "Beta" | "Gamma" | "Delta" | "Bravo" | "Fortnight"
      technical_stage_status: "GIVEN" | "YES" | "RECEIVED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "md_ceo",
        "system_admin",
        "human_resources",
        "sales_manager",
        "operations_manager",
        "team_leader_tso",
        "telecaller_tso",
        "backend_executive",
        "agent",
        "finance_admin",
        "finance_officer",
      ],
      commission_request_status: ["pending", "approved", "rejected", "paid"],
      department_type: [
        "Head Officer",
        "Admin",
        "Sales",
        "Operations",
        "Finance",
        "Administration",
        "Management",
      ],
      legal_stage_status: ["GIVEN", "YES", "RECEIVED"],
      product_type: [
        "Personal Loan",
        "Home Loan",
        "Business Loan",
        "LAP Loan",
        "Car Loan",
        "Education Loan",
      ],
      scheme_type: [
        "Fresh",
        "Parallel",
        "Top-up",
        "BT",
        "CC BT",
        "CC BT + Topup",
        "BT + Topup",
      ],
      team_name: ["Alpha", "Beta", "Gamma", "Delta", "Bravo", "Fortnight"],
      technical_stage_status: ["GIVEN", "YES", "RECEIVED"],
    },
  },
} as const
