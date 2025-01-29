import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import type { Route } from "./+types/editor";
import React, {type ChangeEvent, type ChangeEventHandler, type ReactEventHandler, useEffect} from "react";
import {Textarea} from "~/components/ui/textarea";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "~/components/ui/table";
import {useTableStore} from "~/store/tableStore";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Research React Router" },
        { name: "description", content: "Welcome to Research React Router!" },
    ];
}

export default function Editor() {

    const {
        data,
        setTable,
        getTable,
    } = useTableStore()

    useEffect(() => {
        console.log(`Table data: ${data}`)
        console.log(`Table data: ${data}`)
    }, [data])

    // const value = {
    //     data,
    //     setTable: (data: string) => {
    //         setTable(data)
    //     },
    // }

    const handleDataChange = (evt:ChangeEvent<HTMLTextAreaElement>) => {
        setTable(evt.target.value);
    };

    return (
        <div>
            <Tabs defaultValue="account" className="w-full">
                <TabsList>
                    <TabsTrigger value="editor">Editor</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="editor">
                    <Textarea value={data} className="w-full h-40 resize-none overflow-auto border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white h-[48rem]"
                              onChange={handleDataChange}
                    />
                </TabsContent>
                <TabsContent value="preview">
                    <Table>
                        <TableCaption>Data Table huh</TableCaption>
                        <TableHeader>
                            <TableRow>
                                {getTable()[0].map(heading=> (
                                    <TableHead>{heading}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {getTable().splice(1).map(row=> (
                                <TableRow>
                                    {row.map(column => (
                                        <TableCell className="font-medium">{column}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    );
}
