// WorkPageWrapper.tsx
import ClientWorkPage from "./Work/ClientWorkPage";
import { fetchContent, selectOurWorkPage, selectTalkToUsSection } from "@/store/contentSlice";
import { fetchWorkPageContent, selectWorkPageContent } from "@/store/workPageSlice";
import store from "@/store"; // Import the store directly

export default async function WorkPageWrapper() {
  // Server-side locale setup
  const locale = "en"; // Replace with dynamic locale if needed

  // Dispatch actions server-side to fetch data
  await store.dispatch(fetchContent(locale));
  await store.dispatch(fetchWorkPageContent(locale));

  // Access Redux state directly after dispatch
  const state = store.getState();
  const initialWorkData = selectWorkPageContent(state);
  const initialOurWorkPageContent = selectOurWorkPage(state);
  const initialTalkToUs = selectTalkToUsSection(state);

  // Pass server-fetched data to the client component
  return (
    <ClientWorkPage
      locale={locale}
      initialWorkData={initialWorkData}
      initialOurWorkPageContent={initialOurWorkPageContent}
      initialTalkToUs={initialTalkToUs}
    />
  );
}
