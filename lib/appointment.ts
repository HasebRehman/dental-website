export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  message?: string;
}

export interface AppointmentResponse {
  success: boolean;
  message: string;
  appointmentId?: string;
}

/**
 * Frontend Service Abstraction for Appointment Booking.
 * Currently mocked for frontend phase.
 * Later, this function will connect directly to Supabase DB / Edge Functions.
 */
export async function submitAppointment(
  data: AppointmentFormData
): Promise<AppointmentResponse> {
  // Simulate network latency (1.2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Basic mock validation
  if (!data.fullName || !data.email || !data.phone || !data.preferredDate) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  // Generate a mock appointment ID
  const mockId = `APT-${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    success: true,
    message: `Thank you, ${data.fullName}! Your appointment request (${mockId}) has been received. Our team will contact you shortly to confirm your visit.`,
    appointmentId: mockId,
  };
}
