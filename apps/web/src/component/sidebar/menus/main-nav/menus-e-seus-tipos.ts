import {
  Move3D,
  PlaneIcon,
  Settings,
  Truck,
  Anvil,
  OctagonX,
  GitPullRequestCreate,
  Cog,
  Bug,
  ChessQueen,
} from "lucide-react";

type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

export type LoggedUser = {
  id: string;
  name: string;
  email: string;
};

export type Menu = {
  nome: string;
  path: string;
  icon?: IconType;
  subMenu: boolean;
  isActive?: boolean;
  subMenuItems?: Menu[];
};

export type MenusTodos = {
  loggedUser?: LoggedUser;
  Qualidade: Menu;
  Planeamento: Menu;
  Modelistas: Menu;
  Embarques: Menu;
  Administrador: Menu;
  Rfid: Menu;
  Cp: Menu;
  Joana: Menu;
  Fernanda: Menu;
};

export const IconsMenus = {
  Qualidade: Settings,
  Planeamento: PlaneIcon,
  Modelistas: Move3D,
  Embarques: Truck,
  Administrador: Anvil,
  Rfid: OctagonX,
  Cp: Cog,
  joana: Bug,
  fernanda: ChessQueen,
};

const qualidade: Menu = {
  nome: "Qualidade",
  path: "/dashboard/qualidade",
  icon: IconsMenus.Qualidade,
  subMenu: true,
  subMenuItems: [
    {
      nome: "Balanço M.",
      path: "/dashboard/qualidade/balancom",
      subMenu: false,
    },
    {
      nome: "Tc...",
      path: "/dashboard/qualidade/tc",
      subMenu: false,
    },
  ],
};
const planeamento: Menu = {
  nome: "Planeamento",
  path: "/dashboard/planeamento",
  icon: IconsMenus.Planeamento,
  subMenu: true,
  subMenuItems: [
    {
      nome: "N. Planeamento",
      path: "/dashboard/planeamento?novo=true",
      icon: PlaneIcon,
      subMenu: false,
    },
    {
      nome: "Fornecedores",
      path: "/dashboard/planeamento/fornecedores",
      icon: PlaneIcon,
      subMenu: false,
    },
    {
      nome: "Op's Datas",
      path: "/dashboard/planeamento/opdatas",
      icon: PlaneIcon,
      subMenu: false,
    },
    {
      nome: "Imp. PDF",
      path: "/dashboard/planeamento/pdf",
      icon: GitPullRequestCreate,
      subMenu: false,
    },
  ],
};
const mmodelista: Menu = {
  nome: "Modelistas",
  path: "/dashboard/modelistas",
  icon: IconsMenus.Modelistas,
  subMenu: false,
};
const enbarques: Menu = {
  nome: "Embarques",
  path: "/dashboard/embarques",
  icon: IconsMenus.Embarques,
  subMenu: true,
  subMenuItems: [
    {
      nome: "N. Embarque",
      path: "/dashboard/embarques/novo",
      icon: PlaneIcon,
      subMenu: false,
    },
    {
      nome: "Configurações",
      path: "/dashboard/embarques/configurar",
      icon: PlaneIcon,
      subMenu: false,
    },
  ],
};
const administrador: Menu = {
  nome: "Administrador",
  path: "/dashboard/administrador",
  icon: IconsMenus.Administrador,
  subMenu: false,
};
const rfid: Menu = {
  nome: "Rfid",
  path: "/dashboard/rfid",
  icon: IconsMenus.Rfid,
  subMenu: false,
};
const cp: Menu = {
  nome: "Contrôleurs de Production",
  path: "/dashboard/cp",
  icon: IconsMenus.Cp,
  subMenu: false,
};
const joana: Menu = {
  nome: "Joana",
  path: "/dashboard/joana",
  icon: IconsMenus.joana,
  subMenu: true,
  subMenuItems: [
    {
      nome: "Corte por Op",
      path: "/dashboard/joana/CortePorOp",
      subMenu: false,
    },
    {
      nome: "Entradas MC MA",
      path: "/dashboard/joana/EnMCMA",
      subMenu: false,
    },
    {
      nome: "Envíos a Marrocos",
      path: "/dashboard/joana/EnvMarrocos",
      subMenu: false,
    },
    {
      nome: "Estamparia e Bordados",
      path: "/dashboard/joana/EstEBord",
      subMenu: false,
    },

    {
      nome: "Faturação",
      path: "/dashboard/joana/faturas",
      subMenu: false,
    },
    {
      nome: "Faturação Planeada",
      path: "/dashboard/joana/faturasPlan",
      subMenu: false,
    },
  ],
};
const fernanda: Menu = {
  nome: "Fernanda",
  path: "/dashboard/fernanda",
  icon: IconsMenus.fernanda,
  subMenu: true,
  subMenuItems: [
    {
      nome: "Faturação",
      path: "/dashboard/fernanda/faturas",
      subMenu: false,
    },
    {
      nome: "Faturação Planeada",
      path: "/dashboard/fernanda/faturasPlan",
      subMenu: false,
    },
  ],
};

export const todosOsMenus: Menu[] = [
  qualidade,
  planeamento,
  mmodelista,
  enbarques,
  administrador,
  rfid,
  cp,
  joana,
  fernanda,
];
