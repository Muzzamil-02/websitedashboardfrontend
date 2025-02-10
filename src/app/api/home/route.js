export async function GET() {
  return Response.json({
    section1: {
      businessName: "Company XYZ",
      userName: "user123",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phoneNumber: "1234567890",
      birthday: "1990-01-01",
    },
  });
}
