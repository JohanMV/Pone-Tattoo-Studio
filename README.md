# Pone Tattoo Studio

Sitio multipágina de Pone Tattoo Studio. Implementado con React, TypeScript estricto, Vite y Tailwind CSS v4.

## Desarrollo

```sh
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Vite indica la URL local. La compilación de producción queda en `dist/`. El hosting debe servir `index.html` para las rutas del sitio, incluidas `/portafolio`, `/artista`, `/estudio` y `/contacto`.

## Contenido e integraciones

- `src/data/studio.ts` centraliza los perfiles, el destino de WhatsApp, los estilos y el orden de las publicaciones.
- El formulario prepara un borrador en el WhatsApp del estudio. Acepta un enlace HTTPS o HTTP de referencia. Si la imagen es local, el visitante puede adjuntarla desde el chat.
- El botón «Cómo llegar» abre una búsqueda por nombre y distrito en Google Maps. La URL puede sustituirse por la ficha exacta de la sede.
- Los cinco videos usan el reproductor oficial de TikTok integrado en sus tarjetas, con carga diferida y acceso a cada publicación original.
- El hero usa el fondo facilitado. El logotipo en SVG recrea el de la referencia. Las imágenes de portafolio, estilos, artista y local son ilustraciones generadas y están identificadas en el sitio.

## Imágenes de producción

Los archivos optimizados están en `public/media/`. Se usó ImageGen para los siguientes recursos.

<details>
<summary>Prompts de las imágenes generadas</summary>

- `acuarela.webp` — Photorealistic premium tattoo studio portfolio photograph, portrait 4:5. Very tight close-up of a large vivid watercolor tattoo on a real person's upper arm: original female face with eyes looking directly forward, face divided by electric cyan and scarlet ink with overlapping flowing organic leaves, dripping ink and watercolor spatter. Much like a dramatic editorial tattoo portfolio hero. Full artwork fully in frame, wrap naturally onto curved warm beige skin with fine pores. The top has interleaved warm and cold fields, the face in the middle lower half. Warm dramatic tattoo studio lighting, black in the peripheral areas, beautifully crisp tattoo workmanship, no clothing in focus. Entire frame is photographic, no typography, no graphics, no UI, no frames.
- `perro.webp` — Generate one landscape 3:2 macro photograph of an exquisitely detailed realistic Jack Russell terrier portrait tattoo on a light tan human upper arm, head almost life size, high-contrast orange and white fur, black glossy eyes, dark folded ears, small teal watercolor backing highlights. Warm directional editorial lighting, close crop, real skin pores, black studio out of focus at edges. Tattoo is centered, eyes in top 40%, whole nose and muzzle in frame. Artwork visibly embedded in skin. No text, no design elements, no frame.
- `casco.webp` — Create an editorial macro photograph for a tattoo design gallery, landscape 3:2. A tattoo of an original retro-futurist space helmet on a curved upper arm. Its angular full-face dark visor and geometric ventilation panels are outlined in precise black ink, lit in saturated fuchsia and electric teal, with violet abstract bubbles around it. The real skin and texture fill the full composition, shallow focus around the edges, premium warm side lighting. No writing or logos.
- `horus.webp` — Generate one 3:2 landscape macro photograph of warm peach human skin with a clean black Egyptian Eye of Horus tattoo and subtle crimson iris occupying center-left, small violet Celtic triquetra to the right. Skin fills almost the full composition, eye shape legible and sharp, editorial tattoo studio photo with warm lighting and vignette. Tattoos naturally embedded in skin. No text, no frame.
- `colibri.webp` — Generate a tall 3:4 single photorealistic macro tattoo studio portfolio photograph. A refined fine-line tattoo on light peach upper arm: woman's calm profile facing right within a delicate ornamental crescent, tiny teal and pink hummingbird to the right, and several subtle blush-red flowers below. The whole tattoo centered inside frame with face and bird near upper-middle, intricate neat black lines, very delicate sepia shading. Warm skin texture realistic. Dark peripheral studio background, edge-to-edge. No words, no markup.
- `realismo.webp` — Portrait 3:4 macro editorial photograph of a realistic grayscale tattoo on warm human skin. Greek sculpture portrait, bearded classical hero looking upward with deep-set eyes, elaborate sculpted curls and rich shadow definition, centered in the top two thirds, a little more skin below. Black ink with sepia warm light, black periphery and fine visible pores. It is a photo of an ink tattoo on an arm, not a sculpture. No text or graphics.
- `tigre.webp` — Portrait 3:4 macro photographic study of a large black-and-grey tiger tattoo on a warm tan human thigh. Majestic tiger staring directly into camera with subtle striking turquoise irises, black stippling and contrast on warm skin. Extreme detail on realistic ink texture, dramatic soft side light, whole face and nose in frame. The top three quarters shows the tiger face. Skin and studio shadows fill edges, no text or graphic.
- `anime.webp` — Portrait 3:4 photographic macro studio tattoo portfolio image, lively classic shonen anime tattoo on warm real human arm: joyful black spiky haired young martial artist in blue and orange and winding green dragon among teal and yellow shapes, saturated precise linework and pigment, big face near upper middle, rich warm light and dark periphery, human skin pores visible. No words, no graphic overlays, no frame.
- `artista-principal.webp` — Photorealistic editorial illustration of a tattoo artist at work, portrait 5:7 framing. Visual direction from the supplied hero: young adult Peruvian male tattoo artist, short dark textured hair with a high fade, black ear tunnels, colorful neck and arms, black plain T-shirt and black nitrile gloves. Show him looking down, focused using a tattoo machine on a consenting client's tattooed forearm in the bottom right. His face at upper-middle, full arms and machine in frame. Moody charcoal studio, strong vertical orange neon accent behind on right, natural skin texture. Shallow depth of field. No text, no logos, no collage.
- `artista-retrato.webp` — One square photographic editorial illustration of a young adult Peruvian tattoo artist looking up and right, black-and-white side portrait from low angle, short dark textured hair with high fade, round black ear tunnel, geometric tattoo on neck, plain black t-shirt, dim blurred studio behind. Deep blacks and tangible grain. No words.
- `artista-boceto.webp` — One square photographic editorial illustration, over the shoulder of a Peruvian tattoo artist with short dark high fade and colorful neck tattoos, black t-shirt, right hand with tattoo holding a pencil drawing intricate tattoo outlines of a woman on white paper pinned on a wall, dark edges and warm light, natural photography. No text.
- `artista-sesion.webp` — One square photographic editorial illustration of a short-haired Peruvian tattoo artist wearing an orange and black cap, plain black t-shirt and gloves, with colorful neck tattoos, sitting hunched and carefully tattooing a client's arm, machine visible, dark workspace, warmly toned orange detail, natural photographic depth, no text.
- `estudio.webp` — One near-square photoreal architectural editorial illustration for a tattoo studio in Lima, interior in same composition as the reference: the viewpoint is just inside the reception, with a brilliant solid safety-orange corrugated steel front desk with black top prominently in left foreground, pale gray concrete walls and warm wood floor, black industrial square frames and black chainlink mesh form partition around a line of adjustable black tattoo chairs in center right. Orange stripe under upper black partition, minimal bright linear white lights, black and white brush pattern on a wall at far right. Clean and professionally styled, credible lived-in details, eye-level photo with 26mm lens, natural lighting, high resolution, no people, no signage or text, no overlay, no border.

</details>
