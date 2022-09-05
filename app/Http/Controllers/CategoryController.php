<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Category;

class CategoryController extends Controller
{

    public function index(Request $request)
    {
        $search = $request->input('search');

        $categories = Category::paginate(15);

        if ($request->input('search')) {
            $search = $request->input('search');
            $categories = Category::where('title', 'like', '%'.$search.'%')
              ->orWhere('description', 'like', '%'.$search.'%')
              ->paginate(15);
        }

        return view('category.index', [
              'categories' => $categories,
              'search' => $search,
          ]);
    }

    public function create()
    {
        $category = new Category();

        return view('category.create', [
              'category' => $category,
          ]);
    }

    public function store(Request $request)
    {
        $category = Category::create($request->all());

        if ($request->image) {
            $imagePath = $request->image->store('images', 'public');
            $category->image = $imagePath;
        }

        try {
            $category->save();

            return redirect()->route('category.new')->with([
                  'type' => 'success',
                  'message' => __('app.success_added'),
              ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                  'type' => 'danger',
                  'message' => $e->getMessage(),
              ]);
        }
    }

    public function show($id)
    {
        $category = Category::find($id);

        return view('category.show', [
              'category' => $category,
          ]);
    }

    public function update(Request $request)
    {
        $category = Category::find($request->input('id'));

        if ($request->file('image')) {
            Storage::disk('public')->delete($category->image);
            $category->image = $request->image->store('images', 'public');
        }
        $category->title = $request->title;
        $category->description = $request->description;

        try {
            $category->save();

            return redirect()->back()->with([
                  'type' => 'success',
                  'message' => __('app.success_updated'),
              ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                  'type' => 'danger',
                  'message' => $e->getMessage(),
              ]);
        }
    }

    public function delete($id)
    {
        try {
            $category = Category::find($id);
            Storage::disk('public')->delete($category->image);
            $category->delete();

            return redirect()->back()->with([
                'type' => 'success',
                'message' => __('app.success_deleted'),
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                  'type' => 'danger',
                  'message' => $e->getMessage(),
              ]);
        }
    }
}
