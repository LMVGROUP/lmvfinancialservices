// src/lib/api/fsCareers.ts

const API = "http://localhost:5000/api/fs";

export interface FSJobPosition {
  id: string;
  title: string;
  department_name: string | null;
  location: string;
  job_type: string;
  experience_min: number;
  experience_max: number;
  salary_min: number | null;
  salary_max: number | null;
  summary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  is_urgent: boolean;
  is_featured: boolean;
  openings_count: number;
}

export async function getFSOpenPositions(): Promise<FSJobPosition[]> {
  try {
    const res = await fetch(`${API}/jobs`);
    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.jobs || [];
  } catch (error) {
    console.error("Error fetching FS jobs:", error);
    return [];
  }
}

export async function submitFSApplication(
  formDataObj: {
    job_id: string;
    full_name: string;
    email: string;
    phone: string;
    current_location: string;
    current_company: string;
    current_role: string;
    experience: number;
    expected_salary: string;
    notice_period: string;
    cover_letter: string;
  },
  resumeFile: File
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const formData = new FormData();

    Object.keys(formDataObj).forEach((key) => {
      const value = formDataObj[key as keyof typeof formDataObj];
      if (value !== undefined && value !== null && value !== "") {
        formData.append(key, String(value));
      }
    });

    if (resumeFile) {
      formData.append("resume", resumeFile);
    }

    const res = await fetch(`${API}/apply`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error submitting FS application:", error);
    return {
      success: false,
      error: error.message || "Network error",
    };
  }
}