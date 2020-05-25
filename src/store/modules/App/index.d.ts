export interface RootState {
  navigateBtns: Array<NavigateBtn>
}

export interface NavigateBtn {
  text: string
  route: string
}

export interface IsNowRoute {
  name: string
}

export interface GoRoute {
  name: string
}
