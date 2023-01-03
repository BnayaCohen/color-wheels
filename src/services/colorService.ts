export const colorService = {
  getMonochromaticColors,
  getTriadicColors,
  getComplimentaryColor,
}

function getMonochromaticColors(hex: string): string[] {
  // Parse the hex color and extract its red, green, and blue values
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  // Create an array to store the monochromatic colors
  const monochromaticColors: string[] = [];

  // Generate a range of monochromatic colors
  for (let i = 0; i <= 9; i++) {
    // Calculate the color values for the current iteration
    const colorRed = Math.round(red * (1 - (i / 9)));
    const colorGreen = Math.round(green * (1 - (i / 9)));
    const colorBlue = Math.round(blue * (1 - (i / 9)));

    // Create a hex string for the color values
    const colorHex = `#${colorRed.toString(16).padStart(2, '0')}${colorGreen.toString(16).padStart(2, '0')}${colorBlue.toString(16).padStart(2, '0')}`;

    // Add the color to the array
    monochromaticColors.push(colorHex);
  }

  return [monochromaticColors[0], monochromaticColors[2], monochromaticColors[4],]
}

function getTriadicColors(hex: string): string[] {
  const triadicColors = []
  console.log(hex);

  // Convert the hex string to an RGB value
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  // Get the triadic colors by rotating the hue by 120 degrees
  triadicColors.push(
    `#${(((r + g * 2 + b) / 3 + 120) % 360)
      .toString(16)
      .padStart(2, '0')}${(((g + b * 2 + r) / 3 + 120) % 360)
        .toString(16)
        .padStart(2, '0')}${(((b + r * 2 + g) / 3 + 120) % 360)
          .toString(16)
          .padStart(2, '0')}`
  )
  triadicColors.push(
    `#${(((r + g * 2 + b) / 3 + 240) % 360)
      .toString(16)
      .padStart(2, '0')}${(((g + b * 2 + r) / 3 + 240) % 360)
        .toString(16)
        .padStart(2, '0')}${(((b + r * 2 + g) / 3 + 240) % 360)
          .toString(16)
          .padStart(2, '0')}`
  )

  return [hex, ...triadicColors]
}

function getComplimentaryColor(hex: any): string[] {

  // Convert hex to rgb
  var rgb: any = 'rgb(' + (hex = hex.replace('#', ''))
    .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
    .map(function (l: any) { return parseInt(hex.length % 2 ? l + l : l, 16); })
    .join(',') + ')';

  // Get array of RGB values
  rgb = rgb.replace(/[^\d,]/g, '').split(',');

  var r = rgb[0], g = rgb[1], b = rgb[2];

  // Convert RGB to HSL
  r /= 255.0;
  g /= 255.0;
  b /= 255.0;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h: any, s, l = (max + min) / 2.0;

  if (max == min) {
    h = s = 0;  //achromatic
  } else {
    var d = max - min;
    s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

    if (max == r && g >= b) {
      h = 1.0472 * (g - b) / d;
    } else if (max == r && g < b) {
      h = 1.0472 * (g - b) / d + 6.2832;
    } else if (max == g) {
      h = 1.0472 * (b - r) / d + 2.0944;
    } else if (max == b) {
      h = 1.0472 * (r - g) / d + 4.1888;
    }
  }

  h = h / 6.2832 * 360.0 + 0;

  // Shift hue to opposite side of wheel and convert to [0-1] value
  h += 180;
  if (h > 360) { h -= 360; }
  h /= 360;

  // Convert h s and l values into r g and b values
  // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p: any, q: any, t: any) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  // Convert r b and g values to hex
  rgb = b | (g << 8) | (r << 16)
  return ["#" + hex, "#" + (0x1000000 | rgb).toString(16).substring(1)]
}  