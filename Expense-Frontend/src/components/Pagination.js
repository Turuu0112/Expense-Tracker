import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const Pagi = () => {
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">last 30 days</PaginationLink>
          </PaginationItem>
          <PaginationItem>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
