export interface IIcon {
  id: number;
  icon: string;
  slug: string;
  title: string;
}

export interface IContent {
  projects: IProject[];
}

export interface IContents {
  projects: IProject;
}

export interface IProp {
  icons: IIcon[];
}

export interface IResp {
  data?: any;
  message: string;
  success: boolean;
}
// ()=>void || string
export interface IPortfolioCard {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  color?: string;
  id?: number;
  slug?: string;
  showPadding: boolean;
  buttons?: string[];
}

export interface IPortfolioDetailsCard {
  id: number;
  imageOne: string;
  imageTwo: string;
  imageThree:string;
  title: string;
  subtitle: string;
  url:string;
  snippet: string;
  background: string;
  color: string;
}



export interface IProject {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  stacks: string[];
  url:string;
  images: {
    imageOne: string;
    imageTwo: string;
    imageThree:string;
  };
  background: string;
}
