# Novo pixel Google com consentimento regional

## Alterações
- Adicionar o pixel Google da Utmify `6aa85e74a3751a5dff98be16` junto aos pixels atuais.
- Carregar pixels de anúncios imediatamente fora das regiões reguladas.
- Em regiões que exigem consentimento, manter os pixels bloqueados até a visitante aceitar.
- Exibir aviso regional com opções equivalentes para aceitar ou recusar e um acesso permanente às configurações.
- Salvar a escolha com data e versão do aviso, sincronizando mudanças entre abas.
- Criar uma página de privacidade informando dados usados, plataformas destinatárias, finalidades e como retirar o consentimento.

## Detalhes técnicos
- A região será consultada pelo endpoint do próprio site `/cdn-cgi/trace`, com limite de aproximadamente 2 segundos.
- Falha, região desconhecida ou Tor exibirá o aviso por segurança.
- Uma recusa interromperá novos envios imediatamente; eventos bloqueados não serão reenviados posteriormente.
- O novo pixel e os pixels publicitários existentes seguirão a mesma escolha.
