const IProfileMenuPlugin = "IProfileMenuPlugin";
const IProfileMenuItem = "IProfileMenuItem";

const profileMenuItems = `
  profileMenuItems: Map<string, IProfileMenuItem | ISeparatorItem> = new Map();`;

const addProfileMenuItem = `
  addProfileMenuItem = (item: IProfileMenuItem | ISeparatorItem ): void => {
    this.profileMenuItems.set(item.key, item);
  };`;

const getProfileMenuItems = `
  getProfileMenuItems = (): Map<string, IProfileMenuItem | ISeparatorItem > => {
    return this.profileMenuItems;
  };`;

const updateProfileMenuItem = `
  updateProfileMenuItem = (item: IProfileMenuItem | ISeparatorItem): void => {
    this.profileMenuItems.set(item.key, item);
  };`;

export const getProfileMenuTemp = (withProfileMenu) => {
  if (!withProfileMenu)
    return {
      IProfileMenuPlugin,
      IProfileMenuItem,

      profileMenuVars: "",
      profileMenuMeth: "",
    };

  let profileMenuVars = "";
  let profileMenuMeth = "";

  profileMenuVars = `
  ${profileMenuItems}`;

  profileMenuMeth = `
        ${addProfileMenuItem}
        ${getProfileMenuItems}
        ${updateProfileMenuItem}`;

  return {
    IProfileMenuPlugin,
    IProfileMenuItem,
    profileMenuVars,
    profileMenuMeth,
  };
};