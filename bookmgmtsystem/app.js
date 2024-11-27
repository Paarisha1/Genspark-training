var BookGenre;
(function (BookGenre) {
    BookGenre["FICTION"] = "FICTION";
    BookGenre["NON_FICTION"] = "NON-FICTION";
    BookGenre["MYSTERY"] = "MYSTERY";
    BookGenre["SCIENCE_FICTION"] = "SCIENCE_FICTION";
    BookGenre["BIOGRAPHY"] = "BIOGRAPHY";
    BookGenre["FANTASY"] = "FANTASY";
})(BookGenre || (BookGenre = {}));
var MemberRole;
(function (MemberRole) {
    MemberRole["ORGANIZER"] = "ORGANISER";
    MemberRole["MODERATOR"] = "MODERATOR";
    MemberRole["MEMBER"] = "MEMBER";
    MemberRole["GUEST"] = "GUEST";
})(MemberRole || (MemberRole = {}));
function getBooksByGenre(books, genre) {
    return books.filter(function (book) { return book.genre === genre; });
}
function getMembersByRole(members, role) {
    return members.filter(function (member) { return member.role === role; });
}
function countBooksByGenre(books) {
    return books.reduce(function (acc, book) {
        acc[book.genre] = (acc[book.genre] || 0) + 1;
        return acc;
    }, {});
}
var books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: BookGenre.FICTION },
    { title: "A Brief History of Time", author: "Stephen Hawking", genre: BookGenre.NON_FICTION },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.FANTASY },
    { title: "1984", author: "George Orwell", genre: BookGenre.SCIENCE_FICTION }
];
var members = [
    { name: "Alice", role: MemberRole.ORGANIZER },
    { name: "Bob", role: MemberRole.MEMBER },
    { name: "Charlie", role: MemberRole.MODERATOR },
    { name: "David", role: MemberRole.MEMBER }
];
console.log(getBooksByGenre(books, BookGenre.FICTION));
console.log(getMembersByRole(members, MemberRole.ORGANIZER));
console.log(countBooksByGenre(books));
