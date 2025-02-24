export interface ResumeEntry {
    title: string;
    company: string;
    dates: string;
    bulletPoints?: string[];
}

export interface ResumeSection {
    title: string;
    entries: ResumeEntry[];
}

export interface ResumeData {
    sections: ResumeSection[];
}