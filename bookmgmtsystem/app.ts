enum BookGenre{
    FICTION="FICTION",
    NON_FICTION="NON-FICTION",
    MYSTERY="MYSTERY",
    SCIENCE_FICTION="SCIENCE_FICTION",
    BIOGRAPHY="BIOGRAPHY",
    FANTASY="FANTASY"
}
enum MemberRole{
    ORGANIZER="ORGANISER",
    MODERATOR="MODERATOR",
    MEMBER="MEMBER",
    GUEST="GUEST"
}

type Book={
title:string;
author:string;
genre:BookGenre;
}

type Member={
    name:string;
    role:MemberRole;
}

function getBooksByGenre(books:Book[],genre: BookGenre):Book[]{
return books.filter(book=>book.genre===genre);
}

function getMembersByRole(members: Member[], role: MemberRole): Member[] {
    return members.filter(member => member.role === role);
}

function countBooksByGenre(books: Book[]): { [key in BookGenre]?: number } {
    return books.reduce((acc, book) => {
        acc[book.genre] = (acc[book.genre] || 0) + 1;
        return acc;
    }, {} as { [key in BookGenre]?: number });
}

const books: Book[] = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: BookGenre.FICTION },
    { title: "A Brief History of Time", author: "Stephen Hawking", genre: BookGenre.NON_FICTION },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.FANTASY },
    { title: "1984", author: "George Orwell", genre: BookGenre.SCIENCE_FICTION }
];

const members: Member[] = [
    { name: "Alice", role: MemberRole.ORGANIZER },
    { name: "Bob", role: MemberRole.MEMBER },
    { name: "Charlie", role: MemberRole.MODERATOR },
    { name: "David", role: MemberRole.MEMBER }
];


console.log(getBooksByGenre(books, BookGenre.FICTION));
console.log(getMembersByRole(members, MemberRole.ORGANIZER));
console.log(countBooksByGenre(books));

