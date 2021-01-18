interface ThemeBase {
  /**
   * What will be the focus in the theme it self.
   */
  name: string;
  description?: string;
}

export interface ThemeMentality extends ThemeBase {
}

export interface ThemePhysical extends ThemeBase {
}

export interface ThemeSkill extends ThemeBase {
}

export interface ThemeTactical extends ThemeBase {
}
