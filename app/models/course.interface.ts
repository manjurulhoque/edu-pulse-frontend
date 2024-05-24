interface Course {
    id: number;
    title: string;
    description: string;
    short_description: string;
    student_will_learn: string;
    requirements: string;
    category: Category | null;
    category_id: number;
}
