import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { supabase } from "../lib/supabase";

const DashboardDataContext = createContext(null);

export function DashboardDataProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const fetchDashboardData = useCallback(async () => {
    if (!initialized) {
      setLoading(true);
    }

    const [propertiesRes, ownersRes] = await Promise.all([
      supabase
        .from("properties")
        .select(`
          id,
          title,
          image,
          video_url,
          property_type,
          operation_type,
          city,
          description,
          price,
          currency,
          status,
          created_at,
          owner_id,
          owners(full_name)
        `)
        .order("created_at", { ascending: false }),

      supabase
        .from("owners")
        .select("*")
        .order("created_at", { ascending: false }),
    ]);

    if (propertiesRes.error) {
      console.error("Error fetching properties:", propertiesRes.error);
      setProperties([]);
    } else {
      setProperties(propertiesRes.data || []);
    }

    if (ownersRes.error) {
      console.error("Error fetching owners:", ownersRes.error);
      setOwners([]);
    } else {
      setOwners(ownersRes.data || []);
    }

    setInitialized(true);
    setLoading(false);
  }, [initialized]);

  useEffect(() => {
    if (!initialized) {
      fetchDashboardData();
    }
  }, [initialized, fetchDashboardData]);

  const refreshProperties = useCallback(async () => {
    const { data, error } = await supabase
      .from("properties")
      .select(`
        id,
        title,
        image,
        video_url,
        property_type,
        operation_type,
        city,
        description,
        price,
        currency,
        status,
        created_at,
        owner_id,
        owners(full_name)
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error refreshing properties:", error);
      return;
    }

    setProperties(data || []);
  }, []);

  const refreshOwners = useCallback(async () => {
    const { data, error } = await supabase
      .from("owners")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error refreshing owners:", error);
      return;
    }

    setOwners(data || []);
  }, []);

  const refreshAll = useCallback(async () => {
    const [propertiesRes, ownersRes] = await Promise.all([
      supabase
        .from("properties")
        .select(`
          id,
          title,
          image,
          video_url,
          property_type,
          operation_type,
          city,
          description,
          price,
          currency,
          status,
          created_at,
          owner_id,
          owners(full_name)
        `)
        .order("created_at", { ascending: false }),

      supabase
        .from("owners")
        .select("*")
        .order("created_at", { ascending: false }),
    ]);

    if (propertiesRes.error) {
      console.error("Error refreshing all properties:", propertiesRes.error);
    } else {
      setProperties(propertiesRes.data || []);
    }

    if (ownersRes.error) {
      console.error("Error refreshing all owners:", ownersRes.error);
    } else {
      setOwners(ownersRes.data || []);
    }
  }, []);

  const value = useMemo(
    () => ({
      properties,
      owners,
      loading,
      initialized,
      setProperties,
      setOwners,
      refreshProperties,
      refreshOwners,
      refreshAll,
    }),
    [
      properties,
      owners,
      loading,
      initialized,
      refreshProperties,
      refreshOwners,
      refreshAll,
    ]
  );

  return (
    <DashboardDataContext.Provider value={value}>
      {children}
    </DashboardDataContext.Provider>
  );
}

export function useDashboardData() {
  const context = useContext(DashboardDataContext);

  if (!context) {
    throw new Error("useDashboardData must be used inside DashboardDataProvider");
  }

  return context;
}