javascript
const aiTools = [
  {
    name: "Adobe Firefly",
    description: "Ferramenta de IA da Adobe para geração de imagens e edição criativa.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://www.adobe.com/sensei-generative-ai/firefly.html"
  },
  {
    name: "AIVA",
    description: "IA que compõe música emocional para filmes, jogos e mais.",
    category: "Áudio/Música",
    plan: "Freemium",
    link: "https://www.aiva.ai/"
  },
  {
    name: "AlphaCode",
    description: "Sistema de IA da DeepMind para programação competitiva.",
    category: "Programação",
    plan: "Gratuito",
    link: "https://deepmind.com/blog/competitive-programming-with-alphacode/"
  },
  {
    name: "Amazon CodeWhisperer",
    description: "Ferramenta de programação assistida por IA da Amazon.",
    category: "Programação",
    plan: "Freemium",
    link: "https://aws.amazon.com/codewhisperer/"
  },
  {
    name: "Amper Music",
    description: "Plataforma de composição musical com IA para criadores de conteúdo.",
    category: "Áudio/Música",
    plan: "Pago",
    link: "https://www.ampermusic.com/"
  },
  {
    name: "Anthropic Claude",
    description: "Assistente de IA concorrente do ChatGPT focado em segurança.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://www.anthropic.com"
  },
  {
    name: "AssemblyAI",
    description: "API de transcrição e entendimento de áudio usando IA.",
    category: "Áudio/Texto",
    plan: "Freemium",
    link: "https://www.assemblyai.com/"
  },
  {
    name: "Adept",
    description: "IA que aprende a usar qualquer software para automatizar tarefas.",
    category: "Automação",
    plan: "Gratuito",
    link: "https://www.adept.ai/"
  },
  {
    name: "Bard",
    description: "Chatbot de IA experimental do Google baseado no LaMDA.",
    category: "Chatbot",
    plan: "Gratuito",
    link: "https://bard.google.com/"
  },
  {
    name: "Beautiful.ai",
    description: "Ferramenta de apresentação com design assistido por IA.",
    category: "Design/Apresentações",
    plan: "Freemium",
    link: "https://www.beautiful.ai/"
  },
  {
    name: "Bing Chat",
    description: "Chatbot da Microsoft integrado ao mecanismo de busca Bing.",
    category: "Chatbot",
    plan: "Gratuito",
    link: "https://www.bing.com/new"
  },
  {
    name: "Bloom",
    description: "Modelo de linguagem open-source grande da Hugging Face.",
    category: "LLM",
    plan: "Gratuito",
    link: "https://huggingface.co/bigscience/bloom"
  },
  {
    name: "Boomy",
    description: "Crie músicas originais com IA mesmo sem experiência musical.",
    category: "Áudio/Música",
    plan: "Freemium",
    link: "https://boomy.com/"
  },
  {
    name: "Brandmark.io",
    description: "Design de logos e identidade visual usando IA.",
    category: "Design/Marca",
    plan: "Pago",
    link: "https://brandmark.io/"
  },
  {
    name: "Browse.ai",
    description: "Extraia e monitore dados de qualquer site sem codificação.",
    category: "Web Scraping",
    plan: "Freemium",
    link: "https://www.browse.ai/"
  },
  {
    name: "ChatGPT",
    description: "O famoso chatbot de IA da OpenAI baseado em modelos GPT.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://chat.openai.com/"
  },
  {
    name: "Chatsonic",
    description: "Alternativa ao ChatGPT com acesso à internet e mais recursos.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://writesonic.com/chat"
  },
  {
    name: "Claude",
    description: "Assistente de IA da Anthropic focado em segurança e utilidade.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://www.anthropic.com"
  },
  {
    name: "Cohere",
    description: "Plataforma de linguagem IA para negócios com API.",
    category: "LLM",
    plan: "Pago",
    link: "https://cohere.ai/"
  },
  {
    name: "Copy.ai",
    description: "Ferramenta de escrita de marketing e conteúdo com IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://www.copy.ai/"
  },
  {
    name: "Craiyon",
    description: "Gerador de imagens a partir de texto (antigo DALL-E mini).",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://www.craiyon.com/"
  },
  {
    name: "DALL-E",
    description: "Sistema da OpenAI para gerar imagens a partir de descrições textuais.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://openai.com/dall-e/"
  },
  {
    name: "DeepL",
    description: "Serviço de tradução automática usando IA mais preciso que muitos concorrentes.",
    category: "Texto/Tradução",
    plan: "Freemium",
    link: "https://www.deepl.com/translator"
  },
  {
    name: "DeepDream",
    description: "Ferramenta de geração de imagens psicodélicas do Google.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://deepdreamgenerator.com/"
  },
  {
    name: "Descript",
    description: "Edição de vídeo e áudio usando IA com recursos de transcrição.",
    category: "Áudio/Vídeo",
    plan: "Freemium",
    link: "https://www.descript.com"
  },
  {
    name: "Detectron2",
    description: "Software de detecção de objetos desenvolvido pelo Facebook AI.",
    category: "Visão Computacional",
    plan: "Gratuito",
    link: "https://github.com/facebookresearch/detectron2"
  },
  {
    name: "DiffusionBee",
    description: "Aplicativo para gerar imagens com Stable Diffusion no Mac.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://diffusionbee.com/"
  },
  {
    name: "DreamBooth",
    description: "Técnica para personalizar modelos de difusão de texto para imagem.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://dreambooth.github.io/"
  },
  {
    name: "DreamUp",
    description: "Gerador de arte AI da DeviantArt usando Stable Diffusion.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://www.deviantart.com/dreamup"
  },
  {
    name: "ElevenLabs",
    description: "Geração de voz realista usando IA para audiobooks e mais.",
    category: "Áudio/Voz",
    plan: "Freemium",
    link: "https://beta.elevenlabs.io/"
  },
  {
    name: "Elicit",
    description: "Assistente de pesquisa que usa IA para encontrar artigos científicos.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://elicit.org/"
  },
  {
    name: "Faceswap",
    description: "Software open-source para troca de rostos em imagens e vídeos.",
    category: "Vídeo/Imagem",
    plan: "Gratuito",
    link: "https://github.com/deepfakes/faceswap"
  },
  {
    name: "Fireflies",
    description: "Assistente de reuniões que grava, transcreve e analisa conversas.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://fireflies.ai/"
  },
  {
    name: "Fliki",
    description: "Transforme textos em vídeos com vozes realistas de IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://fliki.ai/"
  },
  {
    name: "Forefront",
    description: "Acesso gratuito a modelos de IA como GPT-4 com recursos extras.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://www.forefront.ai"
  },
  {
    name: "Fotor",
    description: "Editor de fotos online com vários filtros e efeitos de IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://www.fotor.com/"
  },
  {
    name: "GauGAN",
    description: "Ferramenta da NVIDIA que transforma esboços em imagens realistas.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://www.nvidia.com/en-us/studio/canvas/"
  },
  {
    name: "Gemini",
    description: "Modelo de IA multimodal do Google DeepMind.",
    category: "LLM",
    plan: "Gratuito",
    link: "https://deepmind.google/technologies/gemini/"
  },
  {
    name: "GitHub Copilot",
    description: "Assistente de programação baseado em IA que sugere código.",
    category: "Programação",
    plan: "Pago",
    link: "https://github.com/features/copilot"
  },
  {
    name: "GPT-4",
    description: "Modelo de linguagem avançado da OpenAI com capacidades multimodais.",
    category: "LLM",
    plan: "Pago",
    link: "https://openai.com/research/gpt-4"
  },
  {
    name: "Grammarly",
    description: "Assistente de escrita que verifica gramática e estilo usando IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://www.grammarly.com/"
  },
  {
    name: "HeyGen",
    description: "Crie vídeos com apresentadores virtuais usando IA.",
    category: "Vídeo",
    plan: "Pago",
    link: "https://www.heygen.com/"
  },
  {
    name: "Hugging Face",
    description: "Plataforma com milhares de modelos de IA pré-treinados.",
    category: "LLM",
    plan: "Freemium",
    link: "https://huggingface.co"
  },
  {
    name: "Humata",
    description: "IA que analisa documentos e responde perguntas sobre seu conteúdo.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://www.humata.ai/"
  },
  {
    name: "IBM Watson",
    description: "Plataforma de IA empresarial da IBM com diversos serviços.",
    category: "Vários",
    plan: "Pago",
    link: "https://www.ibm.com/watson"
  },
  {
    name: "InVideo",
    description: "Plataforma de criação de vídeos online com assistência de IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://invideo.io/"
  },
  {
    name: "Jasper",
    description: "Ferramenta de escrita de marketing e conteúdo com IA.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://www.jasper.ai/"
  },
  {
    name: "Krisp",
    description: "App que remove ruídos de chamadas usando IA.",
    category: "Áudio",
    plan: "Freemium",
    link: "https://krisp.ai/"
  },
  {
    name: "LaMDA",
    description: "Modelo de conversação do Google que entende contexto complexo.",
    category: "LLM",
    plan: "Gratuito",
    link: "https://blog.google/technology/ai/lamda/"
  },
  {
    name: "Leonardo.Ai",
    description: "Plataforma para gerar assets visuais para jogos com IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://leonardo.ai/"
  },
  {
    name: "Lex",
    description: "Editor de texto com IA para escritores profissionais.",
    category: "Texto/Escrita",
    plan: "Gratuito",
    link: "https://lex.page/"
  },
  {
    name: "Lumen5",
    description: "Transforme conteúdo escrito em vídeos automaticamente.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://lumen5.com/"
  },
  {
    name: "Magenta",
    description: "Projeto de pesquisa do Google sobre IA e criatividade musical.",
    category: "Áudio/Música",
    plan: "Gratuito",
    link: "https://magenta.tensorflow.org/"
  },
  {
    name: "Midjourney",
    description: "Gerador de imagens artísticas a partir de prompts textuais.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://www.midjourney.com/"
  },
  {
    name: "MuseNet",
    description: "IA da OpenAI que compõe música em diferentes estilos.",
    category: "Áudio/Música",
    plan: "Gratuito",
    link: "https://openai.com/research/musenet"
  },
  {
    name: "Notion AI",
    description: "Recursos de IA integrados ao Notion para escrita e organização.",
    category: "Produtividade",
    plan: "Pago",
    link: "https://www.notion.so/product/ai"
  },
  {
    name: "NVIDIA Canvas",
    description: "Transforme pinceladas simples em paisagens realistas com IA.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://www.nvidia.com/en-us/studio/canvas/"
  },
  {
    name: "Otter.ai",
    description: "Assistente de reuniões que grava áudio e faz transcrições em tempo real.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://otter.ai/"
  },
  {
    name: "PaLM",
    description: "Modelo de linguagem grande do Google (Pathways Language Model).",
    category: "LLM",
    plan: "Gratuito",
    link: "https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html"
  },
  {
    name: "Perplexity AI",
    description: "Mecanismo de busca com respostas geradas por IA e citações.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://www.perplexity.ai/"
  },
  {
    name: "Pictory",
    description: "Crie vídeos automaticamente a partir de scripts ou artigos.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://pictory.ai/"
  },
  {
    name: "Playground AI",
    description: "Ferramenta online gratuita para gerar imagens com IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://playgroundai.com/"
  },
  {
    name: "Podcastle",
    description: "Estúdio de podcasting com recursos de edição por IA.",
    category: "Áudio",
    plan: "Freemium",
    link: "https://podcastle.ai/"
  },
  {
    name: "Poised",
    description: "Coach de comunicação que dá feedback sobre suas apresentações.",
    category: "Produtividade",
    plan: "Pago",
    link: "https://www.poised.com/"
  },
  {
    name: "Pollinations",
    description: "Plataforma para criar mídia personalizada com IA.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://pollinations.ai/"
  },
  {
    name: "PredictionGuard",
    description: "API para integrar modelos de linguagem em aplicações com segurança.",
    category: "Desenvolvimento",
    plan: "Pago",
    link: "https://www.predictionguard.com/"
  },
  {
    name: "Quillbot",
    description: "Ferramenta de parafraseamento e resumo usando IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://quillbot.com/"
  },
  {
    name: "Replicate",
    description: "Execute modelos de machine learning open-source na nuvem.",
    category: "Desenvolvimento",
    plan: "Pago",
    link: "https://replicate.com/"
  },
  {
    name: "Resemble AI",
    description: "Gere vozes artificiais realistas e clone sua própria voz.",
    category: "Áudio/Voz",
    plan: "Pago",
    link: "https://www.resemble.ai/"
  },
  {
    name: "Runway",
    description: "Suite criativa com diversas ferramentas de IA para vídeo e imagem.",
    category: "Design/Vídeo",
    plan: "Freemium",
    link: "https://runwayml.com/"
  },
  {
    name: "Scribe",
    description: "Documente processos automaticamente capturando sua tela.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://scribehow.com/"
  },
  {
    name: "Synthesia",
    description: "Crie vídeos com apresentadores virtuais em múltiplos idiomas.",
    category: "Vídeo",
    plan: "Pago",
    link: "https://www.synthesia.io/"
  },
  {
    name: "Tabnine",
    description: "Assistente de programação com IA que sugere completions de código.",
    category: "Programação",
    plan: "Freemium",
    link: "https://www.tabnine.com/"
  },
  {
    name: "TensorFlow",
    description: "Framework open-source de machine learning desenvolvido pelo Google.",
    category: "Desenvolvimento",
    plan: "Gratuito",
    link: "https://www.tensorflow.org/"
  },
  {
    name: "TextCortex",
    description: "Assistente de escrita com IA para diversos tipos de conteúdo.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://textcortex.com/"
  },
  {
    name: "This Person Does Not Exist",
    description: "Gera rostos humanos realistas que não são de pessoas reais.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://thispersondoesnotexist.com/"
  },
  {
    name: "Topaz Labs",
    description: "Suite de ferramentas de IA para melhorar qualidade de imagens e vídeos.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://www.topazlabs.com/"
  },
  {
    name: "Tome",
    description: "Crie apresentações narrativas com ajuda de IA.",
    category: "Design/Apresentações",
    plan: "Freemium",
    link: "https://tome.app/"
  },
  {
    name: "Turing",
    description: "Modelo de linguagem da Microsoft para tarefas de conversação.",
    category: "LLM",
    plan: "Gratuito",
    link: "https://www.microsoft.com/en-us/research/project/turing-nlg/"
  },
  {
    name: "Type Studio",
    description: "Edite vídeos editando o texto da transcrição com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.typestudio.co/"
  },
  {
    name: "Uizard",
    description: "Transforme esboços em designs de UI com IA.",
    category: "Design/UI",
    plan: "Freemium",
    link: "https://uizard.io/"
  },
  {
    name: "VALL-E",
    description: "Modelo da Microsoft que sintetiza voz a partir de amostras curtas.",
    category: "Áudio/Voz",
    plan: "Gratuito",
    link: "https://valle-demo.github.io/"
  },
  {
    name: "Vicuna",
    description: "Modelo de linguagem open-source de alta qualidade.",
    category: "LLM",
    plan: "Gratuito",
    link: "https://lmsys.org/blog/2023-03-30-vicuna/"
  },
  {
    name: "Wav2Vec",
    description: "Modelo de reconhecimento de fala auto-supervisionado do Facebook.",
    category: "Áudio",
    plan: "Gratuito",
    link: "https://ai.facebook.com/blog/wav2vec-20-learning-the-structure-of-speech-from-raw-audio/"
  },
  {
    name: "Whisper",
    description: "Modelo de reconhecimento de fala open-source da OpenAI.",
    category: "Áudio",
    plan: "Gratuito",
    link: "https://openai.com/research/whisper"
  },
  {
    name: "WriteSonic",
    description: "Gerador de conteúdo para marketing, blogs e anúncios com IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://writesonic.com/"
  },
  {
    name: "Zapier AI",
    description: "Automatize workflows entre aplicações com assistência de IA.",
    category: "Produtividade",
    plan: "Pago",
    link: "https://zapier.com/ai"
  },
  {
    name: "Zeno",
    description: "Plataforma para analisar e melhorar modelos de machine learning.",
    category: "Desenvolvimento",
    plan: "Gratuito",
    link: "https://zenoml.com/"
  },
  {
    name: "ZeroGPT",
    description: "Detector de texto gerado por IA como ChatGPT.",
    category: "Texto/Análise",
    plan: "Gratuito",
    link: "https://www.zerogpt.com/"
  },
  {
    name: "ZMO.AI",
    description: "Gerador de imagens e remoção de fundos com IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://zmo.ai"
  },
  // Continuação com mais 100 ferramentas
  {
    name: "AI Dungeon",
    description: "Jogo de aventura textual gerado por IA com narrativa infinita.",
    category: "Jogos/Entretenimento",
    plan: "Freemium",
    link: "https://aidungeon.io/"
  },
  {
    name: "AI Writer",
    description: "Ferramenta de redação de artigos e conteúdo com IA.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://ai-writer.com/"
  },
  {
    name: "Aiko",
    description: "IA de reconhecimento de emoções em tempo real para aplicações.",
    category: "Análise de Sentimentos",
    plan: "Pago",
    link: "https://aiko.ai/"
  },
  {
    name: "Algolia",
    description: "Plataforma de busca inteligente com IA para websites e apps.",
    category: "Busca",
    plan: "Pago",
    link: "https://www.algolia.com/"
  },
  {
    name: "Alpaca",
    description: "Modelo de linguagem fine-tuned do LLaMA para instruções.",
    category: "LLM",
    plan: "Gratuito",
    link: "https://crfm.stanford.edu/2023/03/13/alpaca.html"
  },
  {
    name: "Amperity",
    description: "Plataforma de CDP com IA para unificação de dados de clientes.",
    category: "Marketing",
    plan: "Pago",
    link: "https://amperity.com/"
  },
  {
    name: "Anthropic Claude 2",
    description: "Versão avançada do assistente de IA da Anthropic.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://www.anthropic.com"
  },
  {
    name: "Anyword",
    description: "Ferramenta de copywriting preditiva para marketing.",
    category: "Texto/Marketing",
    plan: "Pago",
    link: "https://anyword.com/"
  },
  {
    name: "Artbreeder",
    description: "Plataforma para criar e misturar imagens usando IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://www.artbreeder.com/"
  },
  {
    name: "Astria",
    description: "IA para geração de imagens personalizadas com fine-tuning.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://www.astria.ai/"
  },
  {
    name: "AutoDraw",
    description: "Ferramenta do Google que transforma rabiscos em desenhos.",
    category: "Design",
    plan: "Gratuito",
    link: "https://www.autodraw.com/"
  },
  {
    name: "AutoGPT",
    description: "Framework para criar agentes autônomos baseados em GPT.",
    category: "Automação",
    plan: "Gratuito",
    link: "https://github.com/Significant-Gravitas/Auto-GPT"
  },
  {
    name: "Bardeen",
    description: "Automação de workflows com IA para aumentar produtividade.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.bardeen.ai/"
  },
  {
    name: "Basis",
    description: "Plataforma de contabilidade automatizada com IA.",
    category: "Finanças",
    plan: "Pago",
    link: "https://basis.ai/"
  },
  {
    name: "BeeDone",
    description: "Assistente pessoal de produtividade com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://beedone.ai/"
  },
  {
    name: "BigGAN",
    description: "Modelo para geração de imagens de alta qualidade.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://arxiv.org/abs/1809.11096"
  },
  {
    name: "Bito",
    description: "Assistente de IA para desenvolvedores que gera código.",
    category: "Programação",
    plan: "Freemium",
    link: "https://bito.ai/"
  },
  {
    name: "Blackbox",
    description: "Ferramenta de busca e extração de código com IA.",
    category: "Programação",
    plan: "Freemium",
    link: "https://www.useblackbox.io/"
  },
  {
    name: "BlenderGPT",
    description: "Controle o Blender usando comandos em linguagem natural via IA.",
    category: "3D/Design",
    plan: "Gratuito",
    link: "https://github.com/gd3kr/BlenderGPT"
  },
  {
    name: "Bold360",
    description: "Plataforma de chatbot com IA para atendimento ao cliente.",
    category: "Chatbot",
    plan: "Pago",
    link: "https://www.bold360.com/"
  },
  {
    name: "Brain.fm",
    description: "Música gerada por IA para foco, relaxamento e sono.",
    category: "Áudio/Música",
    plan: "Freemium",
    link: "https://www.brain.fm/"
  },
  {
    name: "Brand24",
    description: "Monitoramento de mídia social com análise de sentimentos por IA.",
    category: "Marketing",
    plan: "Pago",
    link: "https://brand24.com/"
  },
  {
    name: "Bria",
    description: "API de geração e edição de imagens com IA para empresas.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://bria.ai/"
  },
  {
    name: "BHuman",
    description: "Crie vídeos personalizados em escala usando IA.",
    category: "Vídeo",
    plan: "Pago",
    link: "https://www.bhuman.ai/"
  },
  {
    name: "Caktus",
    description: "Assistente de IA para estudantes com diversas ferramentas.",
    category: "Educação",
    plan: "Freemium",
    link: "https://www.caktus.ai"
  },
  {
    name: "CapeChat",
    description: "Chatbot empresarial seguro para análise de documentos.",
    category: "Chatbot",
    plan: "Pago",
    link: "https://www.capeprivacy.com/capechat"
  },
  {
    name: "Cerebras-GPT",
    description: "Família de modelos de linguagem open-source da Cerebras.",
    category: "LLM",
    plan: "Gratuito",
    link: "https://www.cerebras.net/blog/cerebras-gpt-a-family-of-open-compute-efficient-large-language-models/"
  },
  {
    name: "Character.AI",
    description: "Crie e converse com personagens gerados por IA.",
    category: "Chatbot",
    plan: "Gratuito",
    link: "https://beta.character.ai/"
  },
  {
    name: "ChatGPT Enterprise",
    description: "Versão corporativa do ChatGPT com mais segurança e recursos.",
    category: "Chatbot",
    plan: "Pago",
    link: "https://openai.com/blog/introducing-chatgpt-enterprise"
  },
  {
    name: "ChatPDF",
    description: "Converse com seus PDFs usando IA.",
    category: "Documentos",
    plan: "Freemium",
    link: "https://www.chatpdf.com"
  },
  {
    name: "Chatsonic API",
    description: "API para integrar o Chatsonic em aplicações.",
    category: "Chatbot",
    plan: "Pago",
    link: "https://writesonic.com/api"
  },
  {
    name: "Clarifai",
    description: "Plataforma de visão computacional e reconhecimento de imagens.",
    category: "Visão Computacional",
    plan: "Pago",
    link: "https://www.clarifai.com/"
  },
  {
    name: "Cleanup.pictures",
    description: "Remova objetos indesejados de fotos usando IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://cleanup.pictures"
  },
  {
    name: "ClickUp AI",
    description: "Assistente de produtividade integrado ao ClickUp.",
    category: "Produtividade",
    plan: "Pago",
    link: "https://clickup.com/ai"
  },
  {
    name: "Claude Instant",
    description: "Versão mais rápida e leve do assistente Claude da Anthropic.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://www.anthropic.com"
  },
  {
    name: "Claude Pro",
    description: "Versão premium do assistente Claude com mais recursos.",
    category: "Chatbot",
    plan: "Pago",
    link: "https://www.anthropic.com"
  },
  {
    name: "Claid.ai",
    description: "Ferramenta de IA para otimização de imagens de produtos.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://claid.ai/"
  },
  {
    name: "Codeium",
    description: "Alternativa gratuita ao GitHub Copilot para completação de código.",
    category: "Programação",
    plan: "Gratuito",
    link: "https://codeium.com/"
  },
  {
    name: "Compose AI",
    description: "Autocomplete para escrita com IA em navegadores.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://www.compose.ai/"
  },
  {
    name: "Context",
    description: "Assistente de pesquisa que aprende com seus documentos.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://context.ai/"
  },
  {
    name: "Convai",
    description: "Plataforma para criar personagens de IA conversacionais.",
    category: "Chatbot",
    plan: "Pago",
    link: "https://www.convai.com/"
  },
  {
    name: "Copy.ai API",
    description: "API para integrar capacidades de geração de texto em apps.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://www.copy.ai/api"
  },
  {
    name: "Coveo",
    description: "Plataforma de busca e recomendações com IA para e-commerce.",
    category: "Busca",
    plan: "Pago",
    link: "https://www.coveo.com/"
  },
  {
    name: "Coqui",
    description: "Síntese de voz emocional e expressiva em código aberto.",
    category: "Áudio/Voz",
    plan: "Gratuito",
    link: "https://coqui.ai/"
  },
  {
    name: "Cradle",
    description: "Plataforma de IA para design e engenharia de proteínas.",
    category: "Biotecnologia",
    plan: "Pago",
    link: "https://cradle.bio/"
  },
  {
    name: "Cresta",
    description: "IA para otimizar conversas de vendas e atendimento.",
    category: "Vendas",
    plan: "Pago",
    link: "https://cresta.com/"
  },
  {
    name: "DALL-E 3",
    description: "Versão mais avançada do gerador de imagens da OpenAI.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://openai.com/dall-e-3"
  },
  {
    name: "Deepgram",
    description: "API de transcrição e análise de áudio com IA.",
    category: "Áudio",
    plan: "Pago",
    link: "https://deepgram.com/"
  },
  {
    name: "DeepL Write",
    description: "Assistente de escrita que sugere melhorias em textos.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://www.deepl.com/write"
  },
  {
    name: "Deep Nostalgia",
    description: "Anime fotos antigas com movimentos realistas.",
    category: "Vídeo/Imagem",
    plan: "Freemium",
    link: "https://www.myheritage.com/deep-nostalgia"
  },
  {
    name: "DeepSwap",
    description: "Troque rostos em vídeos e GIFs com IA.",
    category: "Vídeo/Imagem",
    plan: "Pago",
    link: "https://www.deepswap.ai/"
  },
  {
    name: "DeepSeek",
    description: "Modelo de IA avançado para pesquisa e análise de dados.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://deepseek.com/"
  },
  {
    name: "Designs.ai",
    description: "Suite criativa com IA para logos, vídeos e materiais de marketing.",
    category: "Design",
    plan: "Freemium",
    link: "https://designs.ai/"
  },
  {
    name: "Detangle",
    description: "Resuma e simplifique documentos legais complexos com IA.",
    category: "Documentos",
    plan: "Freemium",
    link: "https://detangle.ai/"
  },
  {
    name: "Diagram",
    description: "Ferramentas de design com IA para fluxos e arquitetura de informação.",
    category: "Design/UI",
    plan: "Freemium",
    link: "https://diagram.com/"
  },
  {
    name: "Diffbot",
    description: "API de extração de dados da web usando visão computacional.",
    category: "Web Scraping",
    plan: "Pago",
    link: "https://www.diffbot.com/"
  },
  {
    name: "DimeADozen",
    description: "Valide ideias de negócios usando IA para análise de mercado.",
    category: "Negócios",
    plan: "Pago",
    link: "https://www.dimeadozen.ai/"
  },
  {
    name: "Docus",
    description: "Assistente de IA para saúde que analisa sintomas e documentos médicos.",
    category: "Saúde",
    plan: "Freemium",
    link: "https://docus.ai/"
  },
  {
    name: "DraftLab",
    description: "Assistente de IA para Gmail que ajuda a escrever emails melhores.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://draftlab.ai/"
  },
  {
    name: "DreamGen",
    description: "Plataforma para criar histórias e RPGs com IA.",
    category: "Jogos/Entretenimento",
    plan: "Freemium",
    link: "https://dreamgen.com/"
  },
  {
    name: "Durable",
    description: "Construtor de websites com IA para pequenos negócios.",
    category: "Web Design",
    plan: "Freemium",
    link: "https://durable.co/"
  },
  {
    name: "Echobase",
    description: "Plataforma para criar assistentes de IA para equipes.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://echobase.ai/"
  },
  {
    name: "Eilla AI",
    description: "Assistente de IA para gerenciamento de negócios e operações.",
    category: "Negócios",
    plan: "Pago",
    link: "https://eilla.ai/"
  },
  {
    name: "ElevenLabs API",
    description: "API para integração de vozes realistas geradas por IA.",
    category: "Áudio/Voz",
    plan: "Pago",
    link: "https://api.elevenlabs.io/"
  },
  {
    name: "Endel",
    description: "Música generativa personalizada para foco e relaxamento.",
    category: "Áudio/Música",
    plan: "Freemium",
    link: "https://endel.io/"
  },
  {
    name: "Enhance AI",
    description: "Adicone autocomplete com IA a qualquer campo de texto.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://enhanceai.dev/"
  },
  {
    name: "Exceed.ai",
    description: "Plataforma de engajamento com clientes usando IA conversacional.",
    category: "Vendas",
    plan: "Pago",
    link: "https://exceed.ai/"
  },
  {
    name: "Fathom",
    description: "Assistente de reuniões que grava, resume e destaca insights.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://fathom.video/"
  },
  {
    name: "Fermat",
    description: "Plataforma criativa com IA para design de produtos e moda.",
    category: "Design",
    plan: "Freemium",
    link: "https://fermat.ws/"
  },
  {
    name: "Fireworks",
    description: "Plataforma para executar e otimizar modelos de IA open-source.",
    category: "Desenvolvimento",
    plan: "Pago",
    link: "https://fireworks.ai/"
  },
  {
    name: "FlexClip",
    description: "Editor de vídeo online com recursos de IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.flexclip.com/"
  },
  {
    name: "Flick",
    description: "Assistente de IA para criação de conteúdo em mídias sociais.",
    category: "Marketing",
    plan: "Freemium",
    link: "https://flick.social/"
  },
  {
    name: "Flair",
    description: "Design de branding e materiais de produto com IA.",
    category: "Design/Marca",
    plan: "Pago",
    link: "https://flair.ai/"
  },
  {
    name: "Forecast",
    description: "Plataforma de gerenciamento de projetos com IA para previsões.",
    category: "Negócios",
    plan: "Pago",
    link: "https://www.forecast.app/"
  },
  {
    name: "Formular",
    description: "Gere formulários e pesquisas automaticamente com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://formular.ai/"
  },
  {
    name: "Frase",
    description: "Ferramenta de SEO e criação de conteúdo impulsionada por IA.",
    category: "Marketing",
    plan: "Pago",
    link: "https://www.frase.io/"
  },
  {
    name: "Glasp",
    description: "Assistente de pesquisa e organização de conhecimento com IA.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://glasp.co/"
  },
  {
    name: "GPT-4 Turbo",
    description: "Versão mais avançada e eficiente do GPT-4 da OpenAI.",
    category: "LLM",
    plan: "Pago",
    link: "https://openai.com/blog/gpt-4-turbo"
  },
  {
    name: "GPT Engineer",
    description: "Projeto open-source para gerar código completo com IA.",
    category: "Programação",
    plan: "Gratuito",
    link: "https://github.com/AntonOsika/gpt-engineer"
  },
  {
    name: "Glasp AI",
    description: "Extensão para destacar e resumir textos com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://glasp.co/ai-highlighter"
  },
  {
    name: "Glean",
    description: "Assistente de pesquisa empresarial com IA para equipes.",
    category: "Negócios",
    plan: "Pago",
    link: "https://www.glean.com/"
  },
  {
    name: "GooseAI",
    description: "Plataforma para executar e ajustar modelos de linguagem.",
    category: "LLM",
    plan: "Pago",
    link: "https://goose.ai/"
  },
  {
    name: "GPTZero",
    description: "Detector de texto gerado por IA para educadores.",
    category: "Educação",
    plan: "Freemium",
    link: "https://gptzero.me/"
  },
  {
    name: "GravityWrite",
    description: "Ferramenta de escrita com IA para diversos tipos de conteúdo.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://gravitywrite.com/"
  },
  {
    name: "H2O AI",
    description: "Plataforma open-source para machine learning e IA.",
    category: "Desenvolvimento",
    plan: "Gratuito",
    link: "https://h2o.ai/"
  },
  {
    name: "Harvey",
    description: "Assistente de IA para advogados e profissionais jurídicos.",
    category: "Legal",
    plan: "Pago",
    link: "https://www.harvey.ai/"
  },
  {
    name: "Heyday",
    description: "Assistente de memória com IA que ressurge conteúdo relevante.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://heyday.xyz/"
  },
  {
    name: "Hippo",
    description: "Assistente de vendas com IA para e-commerce.",
    category: "Vendas",
    plan: "Pago",
    link: "https://www.hippo.ai/"
  },
  {
    name: "Hive",
    description: "APIs de IA para moderação de conteúdo e análise de mídia.",
    category: "Moderação",
    plan: "Pago",
    link: "https://thehive.ai/"
  },
  {
    name: "HyperWrite",
    description: "Assistente de escrita com IA que aprende seu estilo.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://hyperwriteai.com/"
  },
  {
    name: "IdeasAI",
    description: "Gerador de ideias para startups usando GPT-3.",
    category: "Negócios",
    plan: "Freemium",
    link: "https://ideasai.com/"
  },
  {
    name: "InferKit",
    description: "Gerador de texto com IA para escritores e criadores de conteúdo.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://inferkit.com/"
  },
  {
    name: "Inkit",
    description: "Geração de documentos personalizados em escala usando IA.",
    category: "Documentos",
    plan: "Pago",
    link: "https://www.inkit.com/"
  },
  {
    name: "InstaText",
    description: "Reescreva textos para soar como um falante nativo de inglês.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://instatext.io/"
  },
  {
    name: "Jasper Art",
    description: "Gerador de imagens artísticas com IA do Jasper.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://www.jasper.ai/art"
  },
  {
    name: "Jina AI",
    description: "Framework open-source para construir aplicações de busca com IA.",
    category: "Busca",
    plan: "Gratuito",
    link: "https://jina.ai/"
  },
  {
    name: "Kaiber",
    description: "Plataforma para criar vídeos e animações com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://kaiber.ai/"
  },
  {
    name: "Kili",
    description: "Plataforma de anotação de dados para treinar modelos de IA.",
    category: "Desenvolvimento",
    plan: "Pago",
    link: "https://kili-technology.com/"
  },
  {
    name: "Kore.ai",
    description: "Plataforma para construir e implantar assistentes virtuais.",
    category: "Chatbot",
    plan: "Pago",
    link: "https://kore.ai/"
  },
  {
    name: "LALAL.AI",
    description: "Extraia vozes e instrumentos de áudio usando IA.",
    category: "Áudio",
    plan: "Freemium",
    link: "https://www.lalal.ai/"
  },
  {
    name: "Lama Cleaner",
    description: "Ferramenta open-source para remoção de objetos em imagens.",
    category: "Design/Imagem",
    plan: "Gratuito",
    link: "https://github.com/Sanster/lama-cleaner"
  },
  {
    name: "Landing AI",
    description: "Ferramentas de visão computacional para aplicações empresariais.",
    category: "Visão Computacional",
    plan: "Pago",
    link: "https://landing.ai/"
  },
  {
    name: "LangChain",
    description: "Framework para desenvolver aplicações com modelos de linguagem.",
    category: "Desenvolvimento",
    plan: "Gratuito",
    link: "https://www.langchain.com/"
  },
  {
    name: "Lateral",
    description: "Plataforma de pesquisa e organização de documentos com IA.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://www.lateral.io/"
  },
  {
    name: "Leia",
    description: "Transforme documentos em áudio com vozes naturais de IA.",
    category: "Áudio",
    plan: "Freemium",
    link: "https://www.leia.io/"
  },
  {
    name: "Let's Enhance",
    description: "Melhore a qualidade de imagens usando IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://letsenhance.io/"
  },
  {
    name: "Lexica",
    description: "Banco de dados e gerador de imagens com Stable Diffusion.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://lexica.art/"
  },
  {
    name: "Lightricks",
    description: "Suite de apps criativos com IA para fotos e vídeos.",
    category: "Design/Vídeo",
    plan: "Freemium",
    link: "https://www.lightricks.com/"
  },
  {
    name: "Lilybank AI",
    description: "Assistente de IA para empreendedores e criadores de conteúdo.",
    category: "Negócios",
    plan: "Freemium",
    link: "https://lilybankai.com/"
  },
  {
    name: "Lobe",
    description: "Ferramenta fácil para treinar modelos de machine learning.",
    category: "Desenvolvimento",
    plan: "Gratuito",
    link: "https://www.lobe.ai/"
  },
  {
    name: "Lovo",
    description: "Plataforma de geração de voz com IA para conteúdo.",
    category: "Áudio/Voz",
    plan: "Freemium",
    link: "https://lovo.ai/"
  },
  {
    name: "Lumen5",
    description: "Transforme conteúdo escrito em vídeos automaticamente.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://lumen5.com/"
  },
  {
    name: "Luma AI",
    description: "Crie modelos 3D a partir de vídeos com IA.",
    category: "3D",
    plan: "Freemium",
    link: "https://lumalabs.ai/"
  },
  {
    name: "Magic Eraser",
    description: "Remova objetos indesejados de fotos com um clique.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://www.magiceraser.io/"
  },
  {
    name: "Magnific",
    description: "Aumente a resolução e detalhes de imagens com IA.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://magnific.ai/"
  },
  {
    name: "Maket",
    description: "Plataforma de IA para geração de projetos arquitetônicos.",
    category: "Design/Arquitetura",
    plan: "Pago",
    link: "https://www.maket.ai/"
  },
  {
    name: "Marple",
    description: "Gere visualizações de dados automaticamente com IA.",
    category: "Análise de Dados",
    plan: "Freemium",
    link: "https://www.marple.ai/"
  },
  {
    name: "Mem",
    description: "Bloco de notas com IA que organiza suas ideias automaticamente.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://mem.ai/"
  },
  {
    name: "Mentioned",
    description: "Monitore quando você é mencionado em documentos e mídias.",
    category: "Monitoramento",
    plan: "Freemium",
    link: "https://mentioned.ai/"
  },
  {
    name: "Merlin",
    description: "Assistente de IA que trabalha em qualquer site.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://merlin.foyer.work/"
  },
  {
    name: "MetaVoice",
    description: "Estúdio de voz com IA para criar e modificar vozes.",
    category: "Áudio/Voz",
    plan: "Freemium",
    link: "https://metavoice.audio/"
  },
  {
    name: "Mintlify",
    description: "Gere documentação de código automaticamente com IA.",
    category: "Programação",
    plan: "Freemium",
    link: "https://www.mintlify.com/"
  },
  {
    name: "Mixo",
    description: "Gere sites para startups com IA em segundos.",
    category: "Web Design",
    plan: "Freemium",
    link: "https://mixo.io/"
  },
  {
    name: "MLflow",
    description: "Plataforma open-source para gerenciar o ciclo de vida de ML.",
    category: "Desenvolvimento",
    plan: "Gratuito",
    link: "https://mlflow.org/"
  },
  {
    name: "Momentum",
    description: "Plugin de IA para criar landing pages rapidamente.",
    category: "Web Design",
    plan: "Freemium",
    link: "https://momentum.ai/"
  },
  {
    name: "Moonbeam",
    description: "Assistente de escrita para criar conteúdo longo com IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://www.gomoonbeam.com/"
  },
  {
    name: "Morph",
    description: "Transforme dados em visualizações e apresentações com IA.",
    category: "Análise de Dados",
    plan: "Freemium",
    link: "https://morph.so/"
  },
  {
    name: "Murf",
    description: "Studio de voz com IA para criar áudio profissional.",
    category: "Áudio/Voz",
    plan: "Freemium",
    link: "https://murf.ai/"
  },
  {
    name: "Namelix",
    description: "Gerador de nomes para negócios usando IA.",
    category: "Negócios",
    plan: "Freemium",
    link: "https://namelix.com/"
  },
  {
    name: "Narrative",
    description: "Gere histórias e roteiros com IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://narrative.ink/"
  },
  {
    name: "Neon AI",
    description: "Plataforma para construir assistentes de voz personalizados.",
    category: "Áudio/Voz",
    plan: "Pago",
    link: "https://neon.ai/"
  },
  {
    name: "Neural Frames",
    description: "Crie vídeos a partir de prompts de texto com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.neuralframes.com/"
  },
  {
    name: "Neural.love",
    description: "Ferramentas de IA para arte, áudio e melhoria de mídia.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://neural.love/"
  },
  {
    name: "Nolej",
    description: "Transforme conteúdo em pacotes interativos de aprendizado.",
    category: "Educação",
    plan: "Freemium",
    link: "https://nolej.io/"
  },
  {
    name: "Noty.ai",
    description: "Transcreva e resuma reuniões automaticamente com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://noty.ai/"
  },
  {
    name: "NovelAI",
    description: "Plataforma de escrita de histórias assistida por IA.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://novelai.net/"
  },
  {
    name: "NVIDIA Omniverse",
    description: "Plataforma para simulação e design 3D com IA.",
    category: "3D",
    plan: "Freemium",
    link: "https://www.nvidia.com/en-us/omniverse/"
  },
  {
    name: "Ocoya",
    description: "Ferramenta de criação de conteúdo para mídias sociais com IA.",
    category: "Marketing",
    plan: "Freemium",
    link: "https://www.ocoya.com/"
  },
  {
    name: "Olli",
    description: "Ferramenta de IA para criar visualizações de dados facilmente.",
    category: "Análise de Dados",
    plan: "Freemium",
    link: "https://www.olli.ai/"
  },
  {
    name: "OpenAI Codex",
    description: "Modelo de IA que traduz linguagem natural em código.",
    category: "Programação",
    plan: "Pago",
    link: "https://openai.com/blog/openai-codex"
  },
  {
    name: "OpusClip",
    description: "Transforme vídeos longos em clips curtos com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.opus.pro"
  },
  {
    name: "Originality.AI",
    description: "Detector de plágio e conteúdo gerado por IA.",
    category: "Texto/Análise",
    plan: "Pago",
    link: "https://originality.ai/"
  },
  {
    name: "Orion",
    description: "Assistente de IA para prever e automatizar tarefas de negócios.",
    category: "Negócios",
    plan: "Pago",
    link: "https://www.orion.ai/"
  },
  {
    name: "Pebblely",
    description: "Crie imagens de produtos profissionais com IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://www.pebblely.com/"
  },
  {
    name: "Personal AI",
    description: "Crie seu próprio assistente de IA pessoal.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.personal.ai/"
  },
  {
    name: "Phind",
    description: "Mecanismo de busca para desenvolvedores com IA.",
    category: "Programação",
    plan: "Gratuito",
    link: "https://www.phind.com/"
  },
  {
    name: "Pictory",
    description: "Crie vídeos automaticamente a partir de scripts ou artigos.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://pictory.ai/"
  },
  {
    name: "Pixelz",
    description: "Edição de fotos de produtos com IA para e-commerce.",
    category: "Design/Imagem",
    plan: "Pago",
    link: "https://www.pixelz.com/"
  },
  {
    name: "Poised",
    description: "Coach de comunicação que dá feedback sobre suas apresentações.",
    category: "Produtividade",
    plan: "Pago",
    link: "https://www.poised.com/"
  },
  {
    name: "Poly AI",
    description: "Plataforma para criar assistentes de voz conversacionais.",
    category: "Áudio/Voz",
    plan: "Pago",
    link: "https://poly.ai/"
  },
  {
    name: "Postwise",
    description: "Ferramenta de IA para escrever e agendar posts em redes sociais.",
    category: "Marketing",
    plan: "Freemium",
    link: "https://postwise.ai/"
  },
  {
    name: "PromptBase",
    description: "Mercado para comprar e vender prompts eficientes para IA.",
    category: "Prompts",
    plan: "Pago",
    link: "https://promptbase.com/"
  },
  {
    name: "PromptLayer",
    description: "Plataforma para gerenciar, versionar e monitorar prompts de IA.",
    category: "Desenvolvimento",
    plan: "Pago",
    link: "https://promptlayer.com/"
  },
  {
    name: "ProWritingAid",
    description: "Assistente de escrita que analisa e melhora textos.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://prowritingaid.com/"
  },
  {
    name: "Publer",
    description: "Agendador de mídias sociais com sugestões de conteúdo por IA.",
    category: "Marketing",
    plan: "Freemium",
    link: "https://publer.io/"
  },
  {
    name: "Puzzle",
    description: "Assistente de IA para análise de dados em planilhas.",
    category: "Análise de Dados",
    plan: "Freemium",
    link: "https://www.puzzlelabs.ai/"
  },
  {
    name: "Quickchat",
    description: "Crie chatbots com IA para seu negócio.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://www.quickchat.ai/"
  },
  {
    name: "Quill",
    description: "Ferramenta de IA para criar apresentações rapidamente.",
    category: "Design/Apresentações",
    plan: "Freemium",
    link: "https://www.quill.org/"
  },
  {
    name: "Rationale",
    description: "Assistente de tomada de decisão baseado em IA.",
    category: "Negócios",
    plan: "Freemium",
    link: "https://rationale.jina.ai/"
  },
  {
    name: "Raw Shorts",
    description: "Crie vídeos explicativos animados com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.rawshorts.com/"
  },
  {
    name: "Reach",
    description: "Plataforma de IA para gerenciamento de relacionamento com clientes.",
    category: "Vendas",
    plan: "Pago",
    link: "https://www.reach.ai/"
  },
  {
    name: "Recast",
    description: "Transforme artigos em podcasts com vozes de IA.",
    category: "Áudio",
    plan: "Freemium",
    link: "https://recast.studio/"
  },
  {
    name: "RecCloud",
    description: "Ferramenta de edição de vídeo online com recursos de IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.reccloud.com/"
  },
  {
    name: "Reduct",
    description: "Transcrição e edição de vídeo com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://reduct.video/"
  },
  {
    name: "Reface",
    description: "App para trocar rostos em vídeos e GIFs com IA.",
    category: "Vídeo/Imagem",
    plan: "Freemium",
    link: "https://reface.ai/"
  },
  {
    name: "Remini",
    description: "Melhore a qualidade de fotos antigas ou de baixa resolução.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://remini.ai/"
  },
  {
    name: "Rephrasely",
    description: "Ferramenta de parafraseamento e reescrita de textos com IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://rephrasely.com/"
  },
  {
    name: "Resemble AI",
    description: "Gere vozes artificiais realistas e clone sua própria voz.",
    category: "Áudio/Voz",
    plan: "Pago",
    link: "https://www.resemble.ai/"
  },
  {
    name: "Rewind AI",
    description: "Grave e pesquise tudo o que você viu ou ouviu no computador.",
    category: "Produtividade",
    plan: "Pago",
    link: "https://www.rewind.ai/"
  },
  {
    name: "Riffusion",
    description: "Gere música a partir de prompts de texto com IA.",
    category: "Áudio/Música",
    plan: "Gratuito",
    link: "https://www.riffusion.com/"
  },
  {
    name: "Rizzle",
    description: "Crie vídeos curtos automaticamente com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.rizzle.com"
  },
  {
    name: "Rosebud",
    description: "Diário de IA que aprende com seus pensamentos e memórias.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.rosebud.ai/"
  },
  {
    name: "RudderStack",
    description: "Plataforma de dados com IA para engenheiros de dados.",
    category: "Análise de Dados",
    plan: "Freemium",
    link: "https://www.rudderstack.com/"
  },
  {
    name: "Rytr",
    description: "Assistente de escrita com IA para diversos tipos de conteúdo.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://rytr.me/"
  },
  {
    name: "Sanebox",
    description: "Organize seu email automaticamente com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.sanebox.com/"
  },
  {
    name: "Scale",
    description: "Plataforma de dados para treinar modelos de IA.",
    category: "Desenvolvimento",
    plan: "Pago",
    link: "https://scale.com/"
  },
  {
    name: "Scispace",
    description: "Plataforma de IA para pesquisa e descoberta científica.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://typeset.io/"
  },
  {
    name: "Seamless",
    description: "API de tradução em tempo real mantendo voz e expressões.",
    category: "Áudio/Tradução",
    plan: "Pago",
    link: "https://www.seamless.ai/"
  },
  {
    name: "Second Nature",
    description: "Treine habilidades de vendas com simuladores de IA.",
    category: "Vendas",
    plan: "Pago",
    link: "https://www.secondnature.ai/"
  },
  {
    name: "Sembly",
    description: "Assistente de reuniões que grava, transcreve e resume.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.sembly.ai/"
  },
  {
    name: "Shaped",
    description: "API de recomendação personalizada com IA.",
    category: "Recomendação",
    plan: "Pago",
    link: "https://www.shaped.ai/"
  },
  {
    name: "SheetAI",
    description: "Adicione superpoderes de IA ao seu Google Sheets.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.sheetai.app/"
  },
  {
    name: "ShortlyAI",
    description: "Assistente de escrita com IA para conteúdo longo.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://www.shortlyai.com/"
  },
  {
    name: "Simplified",
    description: "Suite criativa com IA para design, escrita e vídeo.",
    category: "Design",
    plan: "Freemium",
    link: "https://simplified.com/"
  },
  {
    name: "Sivi",
    description: "Designer gráfico com IA para criar artes rapidamente.",
    category: "Design",
    plan: "Freemium",
    link: "https://www.sivi.ai/"
  },
  {
    name: "Smartsheet",
    description: "Plataforma de gerenciamento de trabalho com recursos de IA.",
    category: "Produtividade",
    plan: "Pago",
    link: "https://www.smartsheet.com/"
  },
  {
    name: "Smodin",
    description: "Ferramenta de escrita e pesquisa com IA para estudantes.",
    category: "Educação",
    plan: "Freemium",
    link: "https://smodin.io/"
  },
  {
    name: "Soundraw",
    description: "Crie músicas originais com IA para seus projetos.",
    category: "Áudio/Música",
    plan: "Freemium",
    link: "https://soundraw.io/"
  },
  {
    name: "Speechify",
    description: "Transforme texto em áudio com vozes naturais de IA.",
    category: "Áudio",
    plan: "Freemium",
    link: "https://speechify.com/"
  },
  {
    name: "Stability AI",
    description: "Crie imagens, áudio e vídeos com modelos de IA open-source.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://stability.ai/"
  },
  {
    name: "StealthGPT",
    description: "Gere texto que evade detecção como conteúdo de IA.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://stealthgpt.ai/"
  },
  {
    name: "Stockimg",
    description: "Gere imagens de stock usando IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://stockimg.ai/"
  },
  {
    name: "Streamlit",
    description: "Framework para criar apps de machine learning rapidamente.",
    category: "Desenvolvimento",
    plan: "Gratuito",
    link: "https://streamlit.io/"
  },
  {
    name: "Supernormal",
    description: "Grave e transcreva reuniões automaticamente com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://supernormal.com"
  },
  {
    name: "Surfer SEO",
    description: "Otimize conteúdo para SEO com recomendações de IA.",
    category: "Marketing",
    plan: "Pago",
    link: "https://surferseo.com/"
  },
  {
    name: "Synthesys",
    description: "Crie vídeos com apresentadores virtuais e vozes de IA.",
    category: "Vídeo",
    plan: "Pago",
    link: "https://synthesys.io/"
  },
  {
    name: "Tabular",
    description: "Armazenamento de dados otimizado para machine learning.",
    category: "Análise de Dados",
    plan: "Pago",
    link: "https://tabular.io/"
  },
  {
    name: "Tavily",
    description: "Assistente de pesquisa com IA para respostas rápidas.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://tavily.com/"
  },
  {
    name: "TextFX",
    description: "Kit de ferramentas de escrita com IA para artistas.",
    category: "Texto/Escrita",
    plan: "Gratuito",
    link: "https://textfx.withgoogle.com/"
  },
  {
    name: "TextRazor",
    description: "API de análise e extração de informações de texto.",
    category: "Texto/Análise",
    plan: "Pago",
    link: "https://www.textrazor.com/"
  },
  {
    name: "The Simulation",
    description: "Ambiente virtual onde AIs interagem e evoluem.",
    category: "Simulação",
    plan: "Gratuito",
    link: "https://the-simulation.com/"
  },
  {
    name: "TimeHero",
    description: "Assistente de planejamento e gerenciamento de tarefas com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://timehero.com/"
  },
  {
    name: "TLDV",
    description: "Grave e transcreva reuniões automaticamente com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://tldv.io/"
  },
  {
    name: "Topaz Video AI",
    description: "Melhore a qualidade de vídeos usando IA.",
    category: "Vídeo",
    plan: "Pago",
    link: "https://www.topazlabs.com/topaz-video-ai"
  },
  {
    name: "Torto",
    description: "Assistente de IA para negociação e vendas.",
    category: "Vendas",
    plan: "Freemium",
    link: "https://torto.ai/"
  },
  {
    name: "Tome",
    description: "Crie apresentações narrativas com ajuda de IA.",
    category: "Design/Apresentações",
    plan: "Freemium",
    link: "https://tome.app/"
  },
  {
    name: "Transkriptor",
    description: "Transcreva áudio em texto com alta precisão usando IA.",
    category: "Áudio/Texto",
    plan: "Freemium",
    link: "https://transkriptor.com/"
  },
  {
    name: "Trinka",
    description: "Assistente de escrita acadêmica e técnica com IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://www.trinka.ai/"
  },
  {
    name: "TTS Maker",
    description: "Conversor de texto em voz com diversas opções de voz.",
    category: "Áudio/Voz",
    plan: "Freemium",
    link: "https://ttsmaker.com/"
  },
  {
    name: "Tumult",
    description: "Plataforma de IA para criar apresentações interativas.",
    category: "Design/Apresentações",
    plan: "Freemium",
    link: "https://www.tumult.com/"
  },
  {
    name: "Turing",
    description: "Modelo de linguagem da Microsoft para tarefas de conversação.",
    category: "LLM",
    plan: "Gratuito",
    link: "https://www.microsoft.com/en-us/research/project/turing-nlg/"
  },
  {
    name: "TweetHunter",
    description: "Ferramenta de IA para crescer no Twitter com conteúdo automatizado.",
    category: "Marketing",
    plan: "Pago",
    link: "https://tweethunter.io/"
  },
  {
    name: "Typeform",
    description: "Crie formulários interativos com ajuda de IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.typeform.com/"
  },
  {
    name: "Unbounce",
    description: "Plataforma de landing pages com otimização por IA.",
    category: "Marketing",
    plan: "Pago",
    link: "https://unbounce.com/"
  },
  {
    name: "Unscreen",
    description: "Remova fundos de vídeos automaticamente com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.unscreen.com/"
  },
  {
    name: "Uizard",
    description: "Transforme esboços em designs de UI com IA.",
    category: "Design/UI",
    plan: "Freemium",
    link: "https://uizard.io/"
  },
  {
    name: "Vable",
    description: "Plataforma de descoberta de conteúdo com IA para profissionais.",
    category: "Pesquisa",
    plan: "Pago",
    link: "https://www.vable.com/"
  },
  {
    name: "Vana",
    description: "Crie arte generativa e explore galerias de IA.",
    category: "Design/Imagem",
    plan: "Freemium",
    link: "https://vana.com/"
  },
  {
    name: "Vectara",
    description: "Plataforma de busca semântica baseada em IA.",
    category: "Busca",
    plan: "Freemium",
    link: "https://vectara.com/"
  },
  {
    name: "Veed.io",
    description: "Editor de vídeo online com recursos de IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.veed.io/"
  },
  {
    name: "Vellum",
    description: "Plataforma para desenvolver e implantar aplicações com LLMs.",
    category: "Desenvolvimento",
    plan: "Pago",
    link: "https://www.vellum.ai/"
  },
  {
    name: "Viable",
    description: "Analise feedback de clientes em escala com IA.",
    category: "Análise de Sentimentos",
    plan: "Pago",
    link: "https://www.askviable.com/"
  },
  {
    name: "Vidnoz",
    description: "Crie vídeos com avatares de IA falantes.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.vidnoz.com/"
  },
  {
    name: "Vizrt",
    description: "Soluções de gráficos e visualização de dados com IA.",
    category: "Visualização de Dados",
    plan: "Pago",
    link: "https://www.vizrt.com/"
  },
  {
    name: "Vondy",
    description: "Coleção de ferramentas de IA para diversas tarefas criativas.",
    category: "Vários",
    plan: "Freemium",
    link: "https://www.vondy.com/"
  },
  {
    name: "Vowel",
    description: "Plataforma de reuniões com transcrição e resumo por IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.vowel.com/"
  },
  {
    name: "Waabi",
    description: "IA para veículos autônomos com simulação avançada.",
    category: "Automotivo",
    plan: "Pago",
    link: "https://waabi.ai/"
  },
  {
    name: "Wand",
    description: "Plataforma de análise de dados com IA para negócios.",
    category: "Análise de Dados",
    plan: "Pago",
    link: "https://wand.ai/"
  },
  {
    name: "Waymark",
    description: "Crie comerciais de TV local automatizados com IA.",
    category: "Marketing",
    plan: "Pago",
    link: "https://waymark.com/"
  },
  {
    name: "Weaviate",
    description: "Banco de dados vetorial open-source para aplicações de IA.",
    category: "Desenvolvimento",
    plan: "Gratuito",
    link: "https://weaviate.io/"
  },
  {
    name: "WellSaid",
    description: "Gere vozes realistas a partir de texto para conteúdo.",
    category: "Áudio/Voz",
    plan: "Pago",
    link: "https://wellsaidlabs.com/"
  },
  {
    name: "Wisecut",
    description: "Editor de vídeo automático que corta silêncios com IA.",
    category: "Vídeo",
    plan: "Freemium",
    link: "https://www.wisecut.video/"
  },
  {
    name: "Writesonic",
    description: "Gerador de conteúdo para marketing, blogs e anúncios com IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://writesonic.com/"
  },
  {
    name: "Writer",
    description: "Plataforma de escrita com IA para equipes empresariais.",
    category: "Texto/Escrita",
    plan: "Pago",
    link: "https://writer.com/"
  },
  {
    name: "Xembly",
    description: "Assistente de produtividade que automatiza tarefas repetitivas.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://xembly.com/"
  },
  {
    name: "Yatter",
    description: "Assistente de IA para gerenciamento de redes sociais.",
    category: "Marketing",
    plan: "Freemium",
    link: "https://yatter.co/"
  },
  {
    name: "Yoodli",
    description: "Coach de comunicação que analisa sua fala com IA.",
    category: "Produtividade",
    plan: "Freemium",
    link: "https://www.yoodli.ai/"
  },
  {
    name: "Youper",
    description: "Assistente de saúde emocional baseado em IA.",
    category: "Saúde",
    plan: "Freemium",
    link: "https://www.youper.ai/"
  },
  {
    name: "Zapier AI",
    description: "Automatize workflows entre aplicações com assistência de IA.",
    category: "Produtividade",
    plan: "Pago",
    link: "https://zapier.com/ai"
  },
  {
    name: "ZenoChat",
    description: "Chatbot com acesso a informações em tempo real.",
    category: "Chatbot",
    plan: "Freemium",
    link: "https://zenochat.com/"
  },
  {
    name: "Zeta Alpha",
    description: "Plataforma de descoberta de pesquisas e artigos com IA.",
    category: "Pesquisa",
    plan: "Freemium",
    link: "https://www.zeta-alpha.com/"
  },
  {
    name: "Zoho Writer",
    description: "Processador de texto com assistente de escrita por IA.",
    category: "Texto/Escrita",
    plan: "Freemium",
    link: "https://www.zoho.com/writer/"
  },
  {
    name: "Zumo",
    description: "Ferramenta de IA para reduzir custos em nuvem.",
    category: "Cloud Computing",
    plan: "Pago",
    link: "https://www.zumokloud.com/"
  }
];

// Exporta o array para uso em outros arquivos
module.exports = aiTools;
```