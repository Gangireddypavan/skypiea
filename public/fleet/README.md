# Fleet Images - File Renaming Instructions

## Current Files (INCORRECT):
- ❌ `Private jet.jpg` → Should be `g650er.jpg`
- ❌ `g700.jpg.jpg` → Should be `g700.jpg` (remove double extension)
- ❌ `global7500.jpg.jpg` → Should be `global7500.jpg` (remove double extension)
- ❌ `falcon8x.jpg.jpg` → Should be `falcon8x.jpg` (remove double extension)
- ❌ `citationx.jpg.jpg` → Should be `citationx.jpg` (remove double extension)
- ❌ `falcon.jpg.jpg` → Should be `challenger650.jpg`

## How to Rename (Manual Method):

### Option 1: Windows File Explorer
1. Open `d:\AI Project\skypiea jets\public\fleet` in File Explorer
2. Right-click each file → Rename
3. Change to the correct names listed above

### Option 2: Command Prompt
Open Command Prompt in the fleet folder and run:
```cmd
ren "Private jet.jpg" "g650er.jpg"
ren "g700.jpg.jpg" "g700.jpg"
ren "global7500.jpg.jpg" "global7500.jpg"
ren "falcon8x.jpg.jpg" "falcon8x.jpg"
ren "citationx.jpg.jpg" "citationx.jpg"
ren "falcon.jpg.jpg" "challenger650.jpg"
```

### Option 3: PowerShell
```powershell
cd "d:\AI Project\skypiea jets\public\fleet"
Rename-Item "Private jet.jpg" "g650er.jpg"
Rename-Item "g700.jpg.jpg" "g700.jpg"
Rename-Item "global7500.jpg.jpg" "global7500.jpg"
Rename-Item "falcon8x.jpg.jpg" "falcon8x.jpg"
Rename-Item "citationx.jpg.jpg" "citationx.jpg"
Rename-Item "falcon.jpg.jpg" "challenger650.jpg"
```

## After Renaming:
Your fleet folder should contain exactly these files:
- ✅ `g650er.jpg`
- ✅ `g700.jpg`
- ✅ `global7500.jpg`
- ✅ `falcon8x.jpg`
- ✅ `citationx.jpg`
- ✅ `challenger650.jpg`
- ✅ `README.md`

Once renamed, refresh your browser at http://localhost:3000 to see the images!
