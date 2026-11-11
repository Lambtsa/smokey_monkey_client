interface Routes {
  index: () => string;
  smoker: () => string;
  bar: () => string;
  restaurant: {
    index: () => string;
    reservation: () => string;
  };
  contact: () => string;
  terms: () => string;
  menu: () => string;
}

export const routes: Routes = {
  index: () => "/",
  smoker: () => "/smoker",
  bar: () => "/bar",
  restaurant: {
    index: () => "/restaurant",
    reservation: () => "/restaurant#reservation",
  },
  contact: () => "/contact",
  terms: () => "/terms",
  /* The menu is a PDF in public/ */
  menu: () => "/menu.pdf",
};
