import Preloader from "@/components/Global/Preloader";
import dynamic from "next/dynamic";

const Submission = dynamic(() => import("@/components/Submission"), {
	loading: () => <Preloader width="5rem" height="5rem" color="#FFE39C" />
})

export default function SubmissionPage() {
	return <Submission />
};
