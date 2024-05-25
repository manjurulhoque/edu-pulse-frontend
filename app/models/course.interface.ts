interface Course {
    id: number;
    title: string;
    description: string;
    short_description: string;
    student_will_learn: string;
    requirements: string;
    preview_image: string;
    category: Category | null;
    category_id: number;
    is_published: boolean;
}
