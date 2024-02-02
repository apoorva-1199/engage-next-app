import { redirect } from "next/navigation";

export default function Home() {
  redirect("/book-app/teacher/dashboard");
}
