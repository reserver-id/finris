import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";

export function useSyncUser() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    const sync = async () => {
      const { id, emailAddresses, fullName } = user;
      await supabase.from("users").upsert(
        {
          clerk_id: id,
          email: emailAddresses[0].emailAddress,
          name: fullName,
        },
        { onConflict: "clerk_id" },
      );
    };
    sync();
  }, [user, isLoaded]);
}
