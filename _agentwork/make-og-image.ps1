Add-Type -AssemblyName System.Drawing
$W=1200; $H=630
$bmp = New-Object System.Drawing.Bitmap $W, $H
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'; $g.TextRenderingHint = 'AntiAliasGridFit'
function C($hex){ [System.Drawing.ColorTranslator]::FromHtml($hex) }
$paper=C '#F1F3EC'; $ink=C '#26302A'; $soft=C '#5B6660'; $shu=C '#C2452F'; $pine=C '#2E4B38'
$g.Clear($paper)

# faint topographic contour rings (like the site background)
$cpen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(26,139,125,90)), 2
foreach($r in 60..14){ $rr=$r*38; $g.DrawEllipse($cpen, 1150-$rr, 700-$rr, 2*$rr, 2*$rr) }
foreach($r in 1..9){ $rr=$r*46; $g.DrawEllipse($cpen, -120-$rr, -160-$rr, 2*$rr, 2*$rr) }

# hanko grade stamp, rotated -6deg like the site's stamps
$g.TranslateTransform(250, 300); $g.RotateTransform(-6)
$g.FillEllipse((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(150,255,255,255))), -150, -150, 300, 300)
$g.DrawEllipse((New-Object System.Drawing.Pen $shu, 16), -140, -140, 280, 280)
$fontFam = if ((New-Object System.Drawing.Text.InstalledFontCollection).Families.Name -contains 'Yu Mincho') { 'Yu Mincho' } else { 'MS Mincho' }
$sf = New-Object System.Drawing.StringFormat; $sf.Alignment='Center'; $sf.LineAlignment='Center'
$g.DrawString('山', (New-Object System.Drawing.Font($fontFam, 118, [System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush $shu), (New-Object System.Drawing.RectangleF(-150,-160,300,300)), $sf)
$g.DrawString('YAMABIYORI', (New-Object System.Drawing.Font('Consolas', 15, [System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush $shu), (New-Object System.Drawing.RectangleF(-150,60,300,40)), $sf)
$g.ResetTransform()

# wordmark + lines
$inkB = New-Object System.Drawing.SolidBrush $ink; $softB = New-Object System.Drawing.SolidBrush $soft
$g.DrawString('山日和', (New-Object System.Drawing.Font($fontFam, 104, [System.Drawing.FontStyle]::Bold)), $inkB, 470, 118)
$g.DrawString('YAMABIYORI  ·  JAPAN HIKING PLANNER', (New-Object System.Drawing.Font('Consolas', 18)), $softB, 480, 292)
$g.FillRectangle($inkB, 480, 336, 640, 4)
$g.DrawString('登山指数・公共交通・山小屋 ― 110座', (New-Object System.Drawing.Font($fontFam, 30, [System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush $pine), 474, 362)
$g.DrawString('Hiking grades, trailhead transit & huts for Japan', (New-Object System.Drawing.Font('Segoe UI', 21)), $softB, 480, 424)
$g.DrawString('lowellbattles.github.io/yama-biyori', (New-Object System.Drawing.Font('Consolas', 18)), (New-Object System.Drawing.SolidBrush $shu), 480, 520)

$g.Dispose()
$bmp.Save($args[0], [System.Drawing.Imaging.ImageFormat]::Png); $bmp.Dispose()
"saved with font $fontFam"

