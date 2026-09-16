import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  ssr: true,
  head: () => ({
    meta: [
      {
        title: "Dallarmi Fluxo Digital — Laboratório Digital para Cirurgiões-Dentistas",
      },
      {
        name: "description",
        content:
          "Laboratório 100% digital exclusivo para cirurgiões-dentistas. Coroas de zircônia, protocolos, laminados e mais — com fluxo rastreável do escaneamento à entrega. Curitiba e região.",
      },
      {
        property: "og:title",
        content: "Dallarmi Fluxo Digital — Laboratório Digital para Cirurgiões-Dentistas",
      },
      {
        property: "og:description",
        content:
          "Chega de escaneamento bagunçado e prazo incerto. Veja como funciona o fluxo digital do Dallarmi.",
      },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP_NUMBER = "5541988700765";
const whatsappLink = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

const SERVICOS = [
  { nome: "Coroa Zircônia", detalhe: "Sobre dente ou implante" },
  { nome: "Laminado Cerâmico", detalhe: "Facetas de alta estética" },
  { nome: "Protocolo", detalhe: "Acrílico, cerâmico ou PMMA" },
  { nome: "Placa Miorrelaxante", detalhe: "Acetato" },
  { nome: "Enceramento Diagnóstico", detalhe: "Planejamento do caso" },
  { nome: "Kit Mockup Completo", detalhe: "Ou kit modelo impresso" },
  { nome: "Onlay em Resina", detalhe: "Restauração indireta" },
  { nome: "Provisório", detalhe: "Enquanto o definitivo é feito" },
  { nome: "Scan Service", detalhe: "Escaneamento a domicílio" },
];

const PASSOS = [
  {
    numero: "01",
    titulo: "Você escaneia",
    texto: "Envie o arquivo do scanner intraoral — sem STL perdido em grupo de WhatsApp.",
  },
  {
    numero: "02",
    titulo: "A gente confirma o caso",
    texto: "Validamos elementos, material e prazo antes de começar a produção.",
  },
  {
    numero: "03",
    titulo: "Você acompanha",
    texto: "Status atualizado em cada etapa — sem precisar ligar pra saber como está o caso.",
  },
  {
    numero: "04",
    titulo: "Recebe no prazo",
    texto: "Peça pronta, com rastreabilidade do início ao fim.",
  },
];

function GalleryPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141b2e] to-[#04060b]">
      <img src="/logo.png" alt="" className="size-12 opacity-30" />
      <span className="absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.14em] text-white/40">
        {label}
      </span>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-sidebar-border/60 bg-sidebar/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="size-9 shrink-0 rounded-xl" />
            <div className="font-display text-lg font-bold text-sidebar-accent-foreground">
              DALLARMI <span className="text-sidebar-primary">FLUXO DIGITAL</span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-sidebar-foreground/70 md:flex">
            <a href="#servicos" className="hover:text-sidebar-foreground">
              Serviços
            </a>
            <a href="#como-funciona" className="hover:text-sidebar-foreground">
              Como funciona
            </a>
            <a href="#contato" className="hover:text-sidebar-foreground">
              Contato
            </a>
          </nav>
          <a
            href={whatsappLink("Olá! Vim pelo site e quero conhecer o fluxo digital do Dallarmi.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-sidebar-primary px-4 py-2 text-sm font-medium text-sidebar-primary-foreground transition-colors hover:opacity-90"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-sidebar">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full border border-sidebar-primary/30 bg-sidebar-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-sidebar-primary">
              Exclusivo para cirurgiões-dentistas
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-sidebar-accent-foreground md:text-5xl">
              Seu laboratório digital, do escaneamento à bancada.
            </h1>
            <p className="mt-5 max-w-lg text-base text-sidebar-foreground/70">
              Chega de scan bagunçado, prazo incerto e ficar cobrando status por WhatsApp. O
              Dallarmi é um laboratório 100% digital com fluxo rastreável, pensado pra clínica que
              não quer perder tempo com retrabalho.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink("Olá! Vim pelo site e quero conhecer o fluxo digital do Dallarmi.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-sidebar-primary px-6 py-3 text-sm font-semibold text-sidebar-primary-foreground transition-colors hover:opacity-90"
              >
                Quero conhecer o fluxo →
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-md border border-sidebar-border px-6 py-3 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:text-sidebar-foreground"
              >
                Ver serviços
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 numeric">
              <div>
                <div className="text-2xl font-bold text-sidebar-accent-foreground">+100</div>
                <div className="text-xs uppercase tracking-[0.1em] text-sidebar-foreground/50">
                  Dentistas atendidos
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sidebar-accent-foreground">Curitiba</div>
                <div className="text-xs uppercase tracking-[0.1em] text-sidebar-foreground/50">
                  E região
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sidebar-accent-foreground">100%</div>
                <div className="text-xs uppercase tracking-[0.1em] text-sidebar-foreground/50">
                  Fluxo digital
                </div>
              </div>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <img src="/logo.png" alt="Dallarmi Fluxo Digital" className="w-64 rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">
            Sua clínica merece um laboratório que não te deixa no escuro.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Se algum desses problemas soa familiar, o fluxo digital do Dallarmi foi feito pra
            resolver:
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              titulo: "Scan perdido no WhatsApp",
              texto: "Arquivo STL some em meio a mensagens e fica difícil rastrear qual versão é a certa.",
            },
            {
              titulo: "Prazo sem previsibilidade",
              texto: "Você só descobre que o caso atrasou quando o paciente já está sentado na cadeira.",
            },
            {
              titulo: "Retrabalho por falha de comunicação",
              texto: "Elemento errado, cor errada, material errado — porque ninguém confirmou o caso direito.",
            },
          ].map((item) => (
            <div key={item.titulo} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{item.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold">Como funciona</h2>
            <p className="mt-4 text-muted-foreground">
              Um fluxo simples, do escaneamento à entrega — com status visível em cada etapa.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {PASSOS.map((passo) => (
              <div key={passo.numero} className="rounded-2xl border border-border bg-card p-6">
                <div className="numeric text-3xl font-bold text-primary">{passo.numero}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{passo.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{passo.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Serviços</h2>
          <p className="mt-4 text-muted-foreground">
            Tudo que sua clínica precisa em um só laboratório digital.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico) => (
            <div
              key={servico.nome}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
              <div>
                <div className="font-medium">{servico.nome}</div>
                <div className="text-sm text-muted-foreground">{servico.detalhe}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold">Casos entregues</h2>
            <p className="mt-4 text-muted-foreground">
              Em breve, fotos reais dos trabalhos feitos pelo laboratório.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <GalleryPlaceholder label="Coroa Zircônia" />
            <GalleryPlaceholder label="Laminado Cerâmico" />
            <GalleryPlaceholder label="Protocolo" />
            <GalleryPlaceholder label="Provisório" />
          </div>
        </div>
      </section>

      {/* CTA final + contato */}
      <section id="contato" className="bg-sidebar py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl font-bold text-sidebar-accent-foreground">
            Manda o primeiro caso e veja a diferença.
          </h2>
          <p className="mt-4 text-sidebar-foreground/70">
            Atendimento para clínicas em Curitiba e região. Fale agora pelo WhatsApp e conheça o
            fluxo digital do Dallarmi.
          </p>
          <a
            href={whatsappLink("Olá! Vim pelo site e quero conhecer o fluxo digital do Dallarmi.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-sidebar-primary px-8 py-3 text-sm font-semibold text-sidebar-primary-foreground transition-colors hover:opacity-90"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="size-6 rounded-md" />
            <span>Dallarmi Fluxo Digital — Laboratório Digital · Curitiba e Região</span>
          </div>
          <Link to="/login" className="text-muted-foreground hover:text-foreground">
            Já é cliente? Acesse o portal →
          </Link>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={whatsappLink("Olá! Vim pelo site e quero conhecer o fluxo digital do Dallarmi.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="size-7 fill-white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.32-1.39a9.87 9.87 0 0 0 4.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.02h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.16.83.84-3.08-.19-.31a8.08 8.08 0 0 1-1.25-4.34c0-4.49 3.65-8.14 8.16-8.14 2.18 0 4.22.85 5.76 2.4a8.08 8.08 0 0 1 2.39 5.76c0 4.49-3.66 8.19-8.11 8.19Zm4.47-6.1c-.24-.12-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.46-.29Z" />
        </svg>
      </a>
    </div>
  );
}
