import { useState } from 'react';
import './App.css';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './components/ui/accordion';
import { Button } from './components/ui/button';
import { Checkbox } from './components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './components/ui/select';

const option = [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'Two' },
    { label: 'theree', value: 'theree' },
    { label: 'four', value: 'four' },
];

const App = () => {
    const [isCheck, setIsCheck] = useState(false);
    return (
        <div className="dark p-12">
            Hello
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <div className="flex flex-col gap-2">
                <span>
                    <Button text="Hello" variant={'default'} size="small" />
                </span>
                <span>
                    <Button text="Hello" variant={'default'} size="small" disabled />
                </span>
                <span>
                    <Button text="Hello" variant="outline" size="small" />
                </span>
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Checkbox
                        checked={isCheck}
                        onCheckedChange={(checked) => setIsCheck(checked)}
                        label="Hello"
                        labelPosition="before"
                    />
                    <Checkbox
                        checked={isCheck}
                        onCheckedChange={(checked) => setIsCheck(checked)}
                        label="Hello"
                    />
                    <Checkbox
                        checked={isCheck}
                        onCheckedChange={(checked) => setIsCheck(checked)}
                        label="Hellso"
                    />
                </div>
                <div>
                    <Select placeholder="Select Something from below" options={option}></Select>
                </div>
            </div>
        </div>
    );
};

export default App;
