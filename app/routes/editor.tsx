import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import type { Route } from './+types/editor'
import React, {
    type ChangeEvent,
    type ChangeEventHandler,
    type ReactEventHandler,
    useEffect,
} from 'react'
import { Textarea } from '~/components/ui/textarea'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table'
import { useTableStore } from '~/store/tableStore'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Research React Router' },
        { name: 'description', content: 'Welcome to Research React Router!' },
    ]
}

export default function Editor() {
    const { data, setTable, getTable } = useTableStore()

    useEffect(() => {
        console.log(`Table data: ${data}`)
    }, [data])

    // const value = {
    //     data,
    //     setTable: (data: string) => {
    //         setTable(data)
    //     },
    // }

    const handleDataChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        setTable(evt.target.value)
    }

    return (
        <div>
            <Tabs defaultValue="editor" className="w-full">
                <TabsList>
                    <TabsTrigger value="editor">Editor</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="editor">
                    <Textarea
                        value={data}
                        className="h-40 h-[48rem] w-full resize-none overflow-auto rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        onChange={handleDataChange}
                    />
                </TabsContent>
                <TabsContent value="preview">
                    <Table>
                        <TableCaption>Data Table huh</TableCaption>
                        <TableHeader>
                            <TableRow>
                                {getTable()[0].map((heading) => (
                                    <TableHead>{heading}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {getTable()
                                .splice(1)
                                .map((row) => (
                                    <TableRow>
                                        {row.map((column) => (
                                            <TableCell className="font-medium">
                                                {column}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    )
}
