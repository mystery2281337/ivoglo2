
import { Container, Title, Filters, Categories } from "@/components/shared/";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Все пиццы" className="font-black" />
      </Container>
      <Categories />
      <TopBar />
      <Container className="mt-10 pd-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
        </div>
      </Container>
    </>
  );
}

