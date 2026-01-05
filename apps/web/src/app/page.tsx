import { PAPEL_ROTA_ADMINISTRADOR } from "@repo/tipos";
import { Button } from "@repo/ui/components/button";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@repo/ui/components/item";
export default function Home() {
  return (
    <>
      <div>{`Hello bernardino e world!!! papel: ${PAPEL_ROTA_ADMINISTRADOR}`}</div>
      <Item variant="outline">
        <ItemContent className="bg-red-400">
          <ItemTitle className="bg-red-400">Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia></ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions></ItemActions>
        </a>
      </Item>
    </>
  );
}
