import Isotope from 'isotope-layout';
import matchesSelector from 'matches-selector';
import imagesLoaded from 'imagesloaded';

const initIsotope = (father) => {
  const grids = document.querySelectorAll(`.${father}`);
  let isos = [];

  const initializeIsotope = (grid, options = {}) => {
    const iso = new Isotope(grid, {
      itemSelector: '.items',
      ...options,
    });

    imagesLoaded(grid).on('always', () => {
      iso.layout();
      isos.push(iso);
    });
  };

  if (grids.length >= 1) {
    grids.forEach((grid) => {
      if (grid.classList.contains('gallery2')) {
        // For the gallery2 grid, add special layout options
        initializeIsotope(grid, {
          masonry: {
            columnWidth: '.width2',
          },
        });
      } else {
        // For other grids, use the default layout options
        initializeIsotope(grid);
      }
    });
  }

  const filtersElem = document.querySelector('.filtering');
  const buttonGroups = document.querySelectorAll('.filtering');

  // Now that all Isotope instances are initialized, you can proceed with event handling
  if (filtersElem) {
    filtersElem.addEventListener('click', function (event) {
      if (!matchesSelector(event.target, 'span')) {
        return;
      }
      const filterValue = event.target.getAttribute('dataFilter');

      // Update all Isotope instances
      isos.forEach((iso) => {
        iso.arrange({ filter: filterValue });
      });
    });

    const radioButtonGroup = (buttonGroup) => {
      buttonGroup.addEventListener('click', (event) => {
        if (!matchesSelector(event.target, 'span')) {
          return;
        }
        buttonGroup.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
      });
    };

    buttonGroups.forEach((buttonGroup) => {
      radioButtonGroup(buttonGroup);
    });
  }
};

export default initIsotope;
