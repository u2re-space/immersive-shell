# immersive-shell

Без рамок, тулбара и навигации. Только контейнер контента + тема. Toast и точечный overlay допустимы.

Для print, fullscreen, embed, одной компоненты.

```ts
import { ImmersiveShell } from "immersive-shell";
```

`ContentShell` наследует этот класс и добавляет multi-view / overlay для CRX.

```bash
cd modules/shells/immersive-shell
npm run ssl:localhost
npm run dev
npm run dev:8434
```
