# Tamreen Frontend — Final Light Version With Generated Photos

## Run locally

Open PowerShell inside this folder, then run:

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## If npm fails on Windows

Stop the server first with `Ctrl + C`, then run:

```bash
npm config set registry https://registry.npmjs.org/
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue
npm cache clean --force
npm install
npm run dev
```

## Pictures

Generated pictures are in:

```txt
public/images/
```

Main files:

- city-libya.jpg
- gym-power.jpg
- gym-benghazi.jpg
- gym-ladies.jpg
- trainer-ahmed.jpg
- trainer-khaled.jpg
- trainer-sara.jpg
- food-green.jpg
- food-protein.jpg
- food-protein-2.jpg
- final-ui-concept.png

## Data

Edit fake app data here:

```txt
lib/data.ts
```
