import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "DALLARMI FLUXO DIGITAL — Portal de ordens de serviço" },
      {
        name: "description",
        content:
          "Acesse o portal do DALLARMI FLUXO DIGITAL para abrir e acompanhar ordens de serviço de prótese dentária.",
      },
      { property: "og:title", content: "DALLARMI FLUXO DIGITAL — Portal de ordens de serviço" },
      {
        property: "og:description",
        content: "Acesse o portal do DALLARMI FLUXO DIGITAL para abrir e acompanhar ordens de serviço de prótese dentária.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { loading, session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    navigate({ to: session ? "/dashboard" : "/login", replace: true });
  }, [loading, session, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="numeric text-sm text-muted-foreground">Carregando…</div>
    </div>
  );
}
