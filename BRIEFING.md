# Briefing — Emporium Stone Marmoraria

## Cliente
- **Empresa:** Emporium Stone Marmoraria
- **CEO:** Jaderson Santos
- **Endereço:** Rua São Miguel, 208 — Varadouro (Centro), João Pessoa-PB, 58010-270
- **WhatsApp / telefone:** (83) 99914-7198
- **Instagram:** @emporiumstone
- **CNPJ:** 62.104.337/0001-04
- **Horário:** seg a sex 08:00–12:00 e 13:00–17:00 · sáb 08:00–11:30 · dom fechado
- **Materiais:** mármores, granitos, quartzos, ultra compactos, NanoGlass e quartzitos — das pedras naturais às mais exóticas
- **Frase do cliente:** "Honramos nossos compromissos e trabalhamos de uma forma prestativa, ótimo acabamento é o nosso forte, para que haja a satisfação imediata do cliente!"

## Chamadas retiradas dos flyers
- "Seu projeto em boas mãos" · "Qualidade em cada detalhe"
- "Transformamos pedras em ambientes únicos, com acabamento de alto padrão e a qualidade que você merece."
- Serviços: bancadas de cozinha, pias, pisos e revestimentos, áreas gourmet, escadas e muito mais
- Selos: qualidade garantida · compromisso com o prazo · pedras nacionais e importadas · atendimento personalizado
- "Precisão que se vê, qualidade que fica!" · corte preciso · acabamento perfeito · compromisso com você

## Prova social
- Nota **4,8 no Google**; 12 avaliações de 5 estrelas enviadas pelo cliente (Carlos Ramathis, Thayris Tavila, Karinny Lemos, Ana Maria Moura Gouveia, Solange Cirilo, Axel Tarcisio, Camila Palmeira, Leticia Santos, Francisca de Fatima V. Ferreira, Fabiana Lira, Anderson Valente, Pedro Degah).
- Temas que se repetem: prazo cumprido, acabamento, atendimento do Jaderson desde o primeiro contato, equipe de instalação organizada e limpa, preço justo.

## Vibe Spec (Fase 1 — respondida por mim, já que a ordem era seguir direto)
1. **Âncora no mundo real:** o showroom de uma marmoraria, com chapas polidas encostadas na parede e luz lateral revelando os veios.
2. **Alvo emocional:** solidez e capricho — "isso aqui dura e foi feito com cuidado".
3. **Colisão de influências:** catálogo de galeria italiana de pedras × ficha técnica de obra.
4. **Evitação:** nunca parecer loja genérica de material de construção nem site de construtora.
5. **Resultado:** fundo de mármore claríssimo em todo o site; seções brancas na maior parte e algumas pretas (nero marquina); verde do logo usado com parcimônia; display Marcellus (capitulares no espírito do logo) + Manrope no texto; **elemento memorável:** as "fichas técnicas" de cada pedra e o corte diagonal do logo repetido nas molduras.

## Copy (Fase 2)
- **Headline:** Pedra natural e superfícies exóticas, cortadas sob medida e entregues com acabamento de alto padrão.
- **Três objeções e onde são respondidas:**
  1. *"Vai atrasar?"* → selo "compromisso com o prazo", frase do CEO, etapas do processo.
  2. *"E se a medida ficar errada?"* → medição no local + projeto em 3D antes do corte (seção do vídeo do tablet).
  3. *"Qual pedra escolher / vale o preço?"* → fichas técnicas por material + orçamento sem compromisso no WhatsApp.
- **CTA:** "Pedir orçamento pelo WhatsApp" / "Mandar as medidas no WhatsApp".

## Tratamento de mídia
- Todas as fotos com logo ou texto por cima foram recortadas para fora do texto/selo; a legenda "Itaúnas escovado" (sobre parede lisa) foi removida por reconstrução, sem borrão.
- Carrossel de fotos: tudo em 1:1. Destaques: 4:5. Portfólio: carrossel 1:1.
- Vídeos: todos em 4:5, recortados para tirar o selo do logo (vídeo 4) e a legenda "Aperfeiçoando os esboços" (vídeo 7). Sem áudio (tocam sozinhos, mudos).
- Fundo de mármore: textura provisória gerada até chegar o wallpaper do cliente — basta trocar `img/marmore-fundo.jpg` pelo arquivo enviado.

## Seções
Navbar → Hero → selos → faixa de materiais → Materiais (fichas) → Portfólio (1 grande + 2 menores) → Vídeo do trabalho → Portfólio (carrossel) → Portfólio (2 grandes) → Vídeos (carrossel com o da vez no centro) → Projeto em 3D (vídeo) → Como trabalhamos → CEO → Atendimento (horário ao vivo, endereço) → CTA final → Rodapé com CNPJ.

---

## Prompt final (também embutido no topo do `index.html`)

```
Crie uma landing page estilo site institucional para a Emporium Stone Marmoraria (Rua São Miguel, 208, Varadouro/Centro, João Pessoa-PB, CEP 58010-270; WhatsApp (83) 99914-7198; Instagram @emporiumstone; CNPJ 62.104.337/0001-04; CEO Jaderson Santos).
A marmoraria trabalha das pedras naturais aos materiais mais exóticos: mármores, granitos, quartzos, ultra compactos, NanoGlass e quartzitos. Serviços: bancadas de cozinha, pias e lavatórios, pisos e revestimentos, áreas gourmet, escadas, mesas e peças sob medida.
Horário: seg–sex 08:00–12:00 e 13:00–17:00; sáb 08:00–11:30; dom fechado (mostrar "aberto/fechado agora" no fuso de Fortaleza).
Direção visual: showroom de pedras × ficha técnica de obra. Tom branco na maior parte, algumas seções pretas; um wallpaper de mármore cobre o fundo inteiro, bem clarinho, visível em todas as seções sem atrapalhar o conteúdo. Verde do logo (#18b85c → #a6f272) só como acento. Tipografia Marcellus (títulos) + Manrope (texto). Corte diagonal do logo repetido nas molduras. Nada de roxo, Inter ou ícones Lucide; ícones SVG próprios.
Chamadas: "Seu projeto em boas mãos", "Qualidade em cada detalhe", "Precisão que se vê, qualidade que fica", "Transformamos pedras em ambientes únicos, com acabamento de alto padrão". Selos: qualidade garantida, compromisso com o prazo, pedras nacionais e importadas, atendimento personalizado. Frase do CEO: "Honramos nossos compromissos e trabalhamos de uma forma prestativa, ótimo acabamento é o nosso forte, para que haja a satisfação imediata do cliente!"
Seções: hero com foto de destaque e CTA de WhatsApp; selos; faixa animada de materiais; fichas técnicas dos 6 materiais; Portfólio com 1 foto grande + 2 menores; seção com vídeo do trabalho na obra; Portfólio em carrossel; Portfólio com 2 fotos grandes; carrossel de vídeos com o da vez em destaque no centro; seção do projeto em 3D no tablet (tecnologia antes do corte); como trabalhamos (4 etapas); seção do CEO com foto; atendimento com horário, endereço e mapa; CTA final; rodapé com CNPJ. Todo espaço vazio recebe frase, dado ou elemento ligado à pedra.
Mídia: remover logo e textos sobrepostos de todas as fotos e vídeos sem borrões nem perda de qualidade; todas as imagens simétricas no mesmo tamanho (exceto as de destaque); todos os vídeos na mesma proporção (4:5), recortados para não aparecer texto; nunca alterar rostos nem distorcer.
Técnico: HTML/CSS/JS num arquivo, mobile primeiro (375px impecável), contraste AA, foco visível, animações só em transform/opacity, respeitar prefers-reduced-motion, botão flutuante de WhatsApp.
```
