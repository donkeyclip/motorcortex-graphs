import MotorCortex from "@donkeyclip/motorcortex";
import AnimePlugin from "@donkeyclip/motorcortex-anime";
const Anime = MotorCortex.loadPlugin(AnimePlugin);

// Static control
// Making the contents of this animation invisible before timestamp:0
// and after timestamp: {totalDuration}
export function opacityControl(clip, selector) {
  clip.addIncident(
    new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 1,
        },
        initialValues: {
          opacity: 0,
        },
      },
      {
        selector: selector,
        duration: 1,
      }
    ),
    0
  );
  clip.addIncident(
    new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 0,
        },
      },
      {
        selector: selector,
        duration: 1,
      }
    ),
    clip.introDur + clip.staticDur + clip.outroDur - 1
  );
}

// Static control: used for fadeout outro components
// Making the contents of this animation invisible before timestamp:0
// and after timestamp: {totalDuration}
export function fadeOutOpacityControl(clip, selector) {
  clip.addIncident(
    new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 1,
        },
        initialValues: {
          opacity: 0,
        },
      },
      {
        selector: selector,
        duration: 1,
      }
    ),
    0
  );
  if (!clip.attrs.timings.outro) {
    clip.addIncident(
      new Anime.Anime(
        {
          animatedAttrs: {
            opacity: 0,
          },
        },
        {
          selector: selector,
          duration: 1,
        }
      ),
      clip.attrs.timings.intro + clip.attrs.timings.static - 1
    );
  }
}
