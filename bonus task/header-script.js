window.onload = () => {
  let posY = window.pageYOffset;
  let menu_a_array = document.querySelectorAll(".header__a");
  let home_a = { el: menu_a_array[0], pos: [0, 706] };
  let about_me_a = { el: menu_a_array[1], pos: [707, 1322] };
  let skills_a = { el: menu_a_array[2], pos: [1323, 1840] };
  let portfolio_a = { el: menu_a_array[3], pos: [1841, 2928] };
  let contacts_a = { el: menu_a_array[4], pos: [2929] };
  let prev_active = undefined;

  if (prev_active === undefined) {
    if (posY >= home_a.pos[0] && posY <= home_a.pos[1]) {
      home_a.el.classList.toggle("header__a--active");
      prev_active = home_a;
    } else if (posY >= about_me_a.pos[0] && posY <= about_me_a.pos[1]) {
      about_me_a.el.classList.toggle("header__a--active");
      prev_active = about_me_a;
    } else if (posY >= skills_a.pos[0] && posY <= skills_a.pos[1]) {
      skills_a.el.classList.toggle("header__a--active");
      prev_active = skills_a;
    } else if (posY >= portfolio_a.pos[0] && posY <= portfolio_a.pos[1]) {
      portfolio_a.el.classList.toggle("header__a--active");
      prev_active = portfolio_a;
    } else {
      contacts_a.el.classList.toggle("header__a--active");
      prev_active = contacts_a;
    }
  }

  if (prev_active !== undefined) {
    window.onscroll = () => {
      posY = window.pageYOffset;
      if (
        posY >= home_a.pos[0] &&
        posY <= home_a.pos[1] &&
        prev_active !== home_a
      ) {
        prev_active.el.classList.toggle("header__a--active");
        home_a.el.classList.toggle("header__a--active");
        prev_active = home_a;
      } else if (
        posY >= about_me_a.pos[0] &&
        posY <= about_me_a.pos[1] &&
        prev_active !== about_me_a
      ) {
        prev_active.el.classList.toggle("header__a--active");
        about_me_a.el.classList.toggle("header__a--active");
        prev_active = about_me_a;
      } else if (
        posY >= skills_a.pos[0] &&
        posY <= skills_a.pos[1] &&
        prev_active !== skills_a
      ) {
        prev_active.el.classList.toggle("header__a--active");
        skills_a.el.classList.toggle("header__a--active");
        prev_active = skills_a;
      } else if (
        posY >= portfolio_a.pos[0] &&
        posY <= portfolio_a.pos[1] &&
        prev_active !== portfolio_a
      ) {
        prev_active.el.classList.toggle("header__a--active");
        portfolio_a.el.classList.toggle("header__a--active");
        prev_active = portfolio_a;
      } else if (posY >= contacts_a.pos[0] &&
        prev_active !== contacts_a) {
        prev_active.el.classList.toggle("header__a--active");
        contacts_a.el.classList.toggle("header__a--active");
        prev_active = contacts_a;
      }
    };
  }
};
